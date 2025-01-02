use crate::state::AppState;
use db_service::model;
use tauri::State;
use tokio::sync::Mutex;

#[tauri::command]
pub async fn save_project(
    title: String,
    description: String,
    tags: String,
    r#type: String,
    state: State<'_, Mutex<AppState>>,
) -> Result<model::project::Project, ()> {
    let state = state.lock().await;
    let db = db_service::connect(state.config.db.uri.as_str())
        .await
        .unwrap();

    let project = db_service::project_service::ProjectService::new(db)
        .create_project(
            title.as_str(),
            description.as_str(),
            tags.as_str(),
            r#type.as_str(),
        )
        .await
        .unwrap();

    Ok(project)
}

#[tauri::command]
pub async fn get_projects(
    state: State<'_, Mutex<AppState>>,
) -> Result<Vec<model::project::Project>, ()> {
    let state = state.lock().await;
    let db = db_service::connect(state.config.db.uri.as_str())
        .await
        .unwrap();

    let projects = db_service::project_service::ProjectService::new(db)
        .find_all_projects()
        .await
        .unwrap()
        .iter()
        .map(|project| model::project::Project {
            id: project.id,
            title: project.title.clone(),
            description: project.description.clone(),
            tags: project.tags.clone(),
            r#type: project.r#type.clone(),
        })
        .collect::<Vec<model::project::Project>>();

    Ok(projects)
}

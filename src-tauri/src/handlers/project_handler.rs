use db_service::model;

#[tauri::command]
pub async fn save_project(
    title: String,
    description: String,
    tags: String,
    r#type: String,
) -> Result<model::project::Project, ()> {
    let db = db_service::connect("sqlite://db.sqlite?mode=rwc")
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

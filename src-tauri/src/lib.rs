use tauri::Manager;
use tokio::sync::Mutex;
use crate::state::AppState;

mod config;
mod handlers;
mod state;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {

            app.manage(Mutex::new(AppState {
                config: config::app_config::read_config("settings.toml").unwrap(),
                ..AppState::default()
            }));
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            handlers::project_handler::save_project,
            handlers::project_handler::get_projects,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

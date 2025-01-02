use crate::config;

#[derive(Default)]
pub struct AppState {
    pub config: config::app_config::Config,
}

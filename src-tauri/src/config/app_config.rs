use serde::Deserialize;
use std::{env, fs};

#[derive(Deserialize, Default)]
pub struct Config {
    pub(crate) db: DatabaseConfig,
}

#[derive(Deserialize, Default)]
pub struct DatabaseConfig {
    pub(crate) uri: String,
}

pub(crate) fn read_config(path: &str) -> Result<Config, Box<dyn std::error::Error>> {
    let env_path = env::current_dir();
    println!(
        "Reading config from {} in {}",
        path,
        env_path.unwrap().display()
    );
    let config_str = fs::read_to_string(path)?;
    let config: Config = toml::from_str(&config_str)?;
    Ok(config)
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_read_config() {
        let config = read_config("../settings.toml").unwrap();
        println!("Database URI: {}", config.db.uri);
    }
}

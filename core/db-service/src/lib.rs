mod services;
pub mod model;

use migration::{Migrator, MigratorTrait};

use sea_orm::{ConnectOptions, Database, DatabaseConnection, DbErr};
use std::time::Duration;

pub use services::*;
pub use model::*;

pub async fn connect(db_path: &str) -> Result<DatabaseConnection, DbErr> {
    let mut opt = ConnectOptions::new(db_path);
    opt.max_connections(100)
        .min_connections(5)
        .connect_timeout(Duration::from_secs(8))
        .acquire_timeout(Duration::from_secs(8))
        .idle_timeout(Duration::from_secs(8))
        .max_lifetime(Duration::from_secs(8))
        .sqlx_logging(true)
        .sqlx_logging_level(log::LevelFilter::Info)
        .set_schema_search_path("my_schema"); // Setting default PostgreSQL schema

    let db = Database::connect(opt).await;
    if db.is_err() {
        println!("Database connection error: {:#?}", db);
        return db;
    }
    Migrator::up(db.as_ref().unwrap(), None).await?;
    db
}

#[cfg(test)]
mod tests {
    use super::*;
    use sea_orm::{DatabaseConnection, DbErr};
    use tokio;

    #[tokio::test]
    async fn test_database_connection() {
        // Test successful connection
        let result = connect("sqlite://db-test-connection.sqlite?mode=rwc").await;

        println!("Database connection result: {:#?}", result);

        if result.is_err() {
            println!("Database connection error: {:#?}", result);
        }

        assert!(result.is_ok(), "Database connection should succeed");
    }

    #[tokio::test]
    async fn test_invalid_connection() {
        // Modify the connection function to accept a connection string
        async fn connect_with_url(url: &str) -> Result<DatabaseConnection, DbErr> {
            let mut opt = ConnectOptions::new(url);
            opt.max_connections(100)
                .min_connections(5)
                .connect_timeout(Duration::from_secs(8))
                .acquire_timeout(Duration::from_secs(8))
                .idle_timeout(Duration::from_secs(8))
                .max_lifetime(Duration::from_secs(8))
                .sqlx_logging(true)
                .sqlx_logging_level(log::LevelFilter::Info)
                .set_schema_search_path("my_schema");

            Database::connect(opt).await
        }

        // Test invalid connection string
        let result = connect_with_url("sqlite://nonexistent/db.sqlite").await;
        assert!(
            result.is_err(),
            "Connection to invalid database should fail"
        );
    }
}

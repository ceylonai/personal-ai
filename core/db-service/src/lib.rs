use std::time::Duration;
use sea_orm::{ConnectOptions, Database, DatabaseConnection, DbErr};

pub async fn connect() -> Result<DatabaseConnection, DbErr> {
    let mut opt = ConnectOptions::new("sqlite://db.sqlite?mode=rwc");
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

    db
}

#[cfg(test)]
mod tests {
    use sea_orm::{DatabaseConnection, DbErr};
    use super::*;
    use tokio;

    #[tokio::test]
    async fn test_database_connection() {
        // Test successful connection
        let result = connect().await;

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
        assert!(result.is_err(), "Connection to invalid database should fail");
    }
}
use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Project::Table)
                    .if_not_exists()
                    .col(pk_auto(Project::Id))
                    .col(string(Project::Title))
                    .col(string(Project::Description))
                    .col(string(Project::Tags))
                    .col(string(Project::Type))
                    .col(date_time(Project::CreatedAt).default(Expr::current_timestamp()))
                    .col(date_time(Project::UpdatedAt).default(Expr::current_timestamp()))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Project::Table).to_owned())
            .await
    }
}

// id: string
// projectName: string
// description: string
// projectType: string
// tags: string[]
// createdAt: string
// updatedAt: string
#[derive(DeriveIden)]
enum Project {
    Table,
    Id,
    Title,
    Description,
    Type,
    Tags,
    CreatedAt,
    UpdatedAt,
}

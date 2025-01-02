use crate::model::project::Project;
use entity::project;
use sea_orm::{ActiveModelTrait, DatabaseConnection, DbErr, EntityTrait, Set};

pub struct ProjectService {
    db: DatabaseConnection,
}

impl ProjectService {
    pub fn new(db: DatabaseConnection) -> Self {
        Self { db }
    }

    pub async fn create_project(
        &self,
        title: &str,
        description: &str,
        tags: &str,
        r#type: &str,
    ) -> Result<Project, DbErr> {
        let project = project::ActiveModel {
            title: Set(title.to_string()),
            description: Set(description.to_string()),
            tags: Set(tags.to_string()),
            r#type: Set(r#type.to_string()),
            ..Default::default()
        };

        let model = project.insert(&self.db).await.unwrap();

        Ok(Project {
            id: model.id,
            title: model.title,
            description: model.description,
            tags: model.tags,
            r#type: model.r#type,
        })
    }

    pub async fn find_project(&self, id: i32) -> Result<Option<project::Model>, DbErr> {
        project::Entity::find_by_id(id).one(&self.db).await
    }

    pub async fn find_all_projects(&self) -> Result<Vec<project::Model>, DbErr> {
        project::Entity::find().all(&self.db).await
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::connect;

    #[tokio::test]

    async fn test_create_project() {
        let db = connect("sqlite://db-test-project-repo.sqlite?mode=rwc")
            .await
            .unwrap();
        let user_service = ProjectService::new(db);
        let user = user_service
            .create_project("test", "test", "test", "test")
            .await
            .unwrap();
        assert_eq!(user.title, "test");
    }
}

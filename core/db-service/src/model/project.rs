use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Project {
    pub id: i32,
    pub title: String,
    pub description: String,
    pub tags: String,
    pub r#type: String,
}

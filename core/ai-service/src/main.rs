use std::sync::Arc;
use lancedb::arrow::arrow_schema::{DataType, Field, Schema};
use lancedb::connect;

#[tokio::main]
async fn main() {
    let uri = "data/sample-lancedb";
    let db = connect(uri).execute().await.unwrap();

    let schema = Arc::new(Schema::new(vec![
        Field::new("id", DataType::Int32, false),
        Field::new("item", DataType::Utf8, true),
    ]));
    db.create_empty_table("empty_table", schema).execute().await.expect("TODO: panic message");
}

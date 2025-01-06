from robyn import Robyn
from routers import project_router

app = Robyn(__file__)


@app.get("/")
async def home():
    return {"message": "Welcome to the home page!"}


if __name__ == "__main__":
    app.include_router(project_router.rt)
    # create a configured "Session" class
    app.start(host="0.0.0.0", port=8080)

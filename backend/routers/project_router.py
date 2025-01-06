from robyn import Request, SubRouter

rt = SubRouter(__file__, "/project")
GLOBAL_DEPENDENCY = "GLOBAL DEPENDENCY OVERRIDE"
ROUTER_DEPENDENCY = "ROUTER DEPENDENCY"
rt.inject_global(GLOBAL_DEPENDENCY=GLOBAL_DEPENDENCY)
rt.inject(ROUTER_DEPENDENCY=ROUTER_DEPENDENCY)


@rt.get("/")
async def get_project(request: Request):
    # get_project
    # return await invoke<Project>("get_project", request)
    return {
        "id": 1,
        "name": "Project 1",
        "description": "This is a project",
    }


@rt.get("/list")
async def get_projects():
    # get_projects
    # return await invoke<Project[]>("get_projects")
    return []

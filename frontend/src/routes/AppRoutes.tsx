import {createBrowserRouter, RouterProvider} from "react-router";
import Page from "@/app/pages/dashboard/page.tsx";
import App from "@/App.tsx";
import ProjectCreationPage from "@/app/pages/dashboard/project/create/page.tsx";
import ProjectUI from "@/app/pages/dashboard/project/view/page.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/dashboard",
        element: <Page/>,
    },
    {
        path: "/project/create",
        element: <ProjectCreationPage/>,
    },
    {
        path: "/project/view/:projectId",
        element: <ProjectUI/>,
    },
]);
const AppRoutes = () => {
    return (
        <>
            <RouterProvider router={routes}/>
        </>
    );
}
export default AppRoutes
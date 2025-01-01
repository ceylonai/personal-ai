import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from "@/app/pages/dashboard.tsx";
import App from "@/App.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
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
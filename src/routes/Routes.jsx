import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [],
            },
            {
                path: "/statistics",
                element: <Statistics />,
                children: [],
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [],
            },
        ],
    },
]);

export default router;

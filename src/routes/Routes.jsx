import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Wishlist from "../pages/Wishlist";
import Carts from "../pages/Carts";
import GadgetCards from "../components/GadgetCards";
import GadgetDetails from "../pages/GadgetDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("../categories.json"),
                children: [
                    {
                        path: "/",
                        element: <GadgetCards />,
                        loader: () => fetch("../gadgets.json"),
                    },
                    {
                        path: "/category/:category",
                        element: <GadgetCards />,
                        loader: () => fetch("../gadgets.json"),
                    },
                ],
            },
            {
                path: "/statistics",
                element: <Statistics />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                loader: () => fetch("../gadgets.json"),
                children: [
                    // {
                    //     path: "/",
                    //     element: <Carts />,
                    // },
                    // {
                    //     path: "/wishlist",
                    //     element: <Wishlist />,
                    // },
                ],
            },
            {
                path: "/gadgets/:id",
                element: <GadgetDetails />,
                loader: () => fetch("../gadgets.json"),
            },
        ],
    },
]);

export default router;

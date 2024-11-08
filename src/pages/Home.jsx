import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";
import GadgetCards from "../components/GadgetCards";

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);

    return (
        <div className="">
            {/* Banner */}
            <Banner />

            {/* Heading */}
            <Heading
                titleClassName="text-black"
                title="Explore Cutting-Edge Gadgets"
            ></Heading>

            {/* Categories tab section */}
            <Categories categories={categories}></Categories>
            <GadgetCards categories={categories}></GadgetCards>

            {/* Dynamic Nested Component */}
            <Outlet />
        </div>
    );
};

export default Home;

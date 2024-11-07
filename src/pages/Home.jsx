import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const Home = () => {
    return (
        <div className="">
            <div className="bg-primary text-center px-2 md:px-56 pb-60">
                <Heading
                    titleClassName="text-4xl lg:text-5xl"
                    subtitleClassName="md:w-2/3 mx-auto text-white"
                    title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
                    subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                />
                <button className="btn px-7 rounded-full bg-white text-primary text-xl font-bold">
                    Shop Now
                </button>
            </div>

            <div className="max-w-screen-lg mx-auto h-80 md:h-[563px] bg-white/15 border border-white rounded-3xl p-4 md:p-6 relative -top-48 z-10">
                <img
                    src="/src/assets/banner.jpg"
                    alt="Banner"
                    className="w-full h-full rounded-3xl"
                />
            </div>

            <Outlet />
        </div>
    );
};

export default Home;

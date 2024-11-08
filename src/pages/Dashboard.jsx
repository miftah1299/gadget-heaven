import { NavLink } from "react-router-dom";
import Heading from "../components/Heading";

const Dashboard = () => {
    return (
        <div>
            <div className="bg-primary pb-12">
                <Heading
                    title="Dashboard"
                    subtitleClassName="w-1/2 mx-auto"
                    subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                ></Heading>

                <div
                    role="tablist"
                    className="tabs tabs-bordered flex gap-4 justify-center"
                >
                    <NavLink
                        to={`/carts`}
                        role="tab"
                        className={({ isActive }) =>
                            `rounded-full  px-16 py-4 text-lg font-bold ${
                                isActive
                                    ? "tab-active bg-white text-primary"
                                    : "bg-primary text-white border border-white"
                            }`
                        }
                    >
                        Cart
                    </NavLink>

                    <NavLink
                        to={`/wishlist`}
                        role="tab"
                        className={({ isActive }) =>
                            `rounded-full  px-16 py-4 text-lg font-bold ${
                                isActive
                                    ? "tab-active bg-white text-primary"
                                    : "bg-primary text-white border border-white"
                            }`
                        }
                    >
                        Wishlist
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

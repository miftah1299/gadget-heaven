import { NavLink } from "react-router-dom";
import Heading from "../components/Heading";
import { useState } from "react";
import Carts from "./Carts";
import Wishlist from "./Wishlist";

const Dashboard = () => {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(true);
    };
    const handleToggleWishlist = () => {
        setToggle(false);
    };

    return (
        <div>
            <div className="bg-primary pb-12">
                <Heading
                    title="Dashboard"
                    subtitleClassName="w-1/2 mx-auto"
                    subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                ></Heading>

                <div className="flex gap-4 justify-center">
                    <NavLink
                        onClick={handleToggle}
                        // to={`/carts`}
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
                        onClick={handleToggleWishlist}
                        // to={`/wishlist`}
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
            {toggle ? (
                <Carts></Carts>
            ) : (
                <Wishlist></Wishlist>
            )}
        </div>
    );
};

export default Dashboard;

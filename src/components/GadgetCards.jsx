import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCards = ({ categories }) => {
    const data = useLoaderData();
    const { category } = useParams();

    const [gadgets, setGadgets] = useState([]);
    // useEffect for filtering data based on category
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(
                (gadget) => gadget.category === category
            );
            setGadgets(filteredByCategory);
        } else {
            setGadgets(data);
        }
    }, [category, data]);

    // console.log(category);

    return (
        <div className="grid grid-cols-5 gap-6 max-w-screen-xl mx-auto">
            <div
                role="tablist"
                className="tabs tabs-bordered flex flex-col gap-6 items-start bg-white rounded-xl p-6 h-96"
            >
                {categories &&
                    categories.map((category) => (
                        <NavLink
                            key={category.id}
                            to={`/category/${category.category}`}
                            role="tab"
                            className={({ isActive }) =>
                                `rounded-full px-8 py-4 font-medium ${
                                    isActive
                                        ? "tab-active bg-primary text-white"
                                        : "bg-zinc-100 "
                                }`
                            }
                        >
                            {category.category}
                        </NavLink>
                    ))}
            </div>

            <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gadgets.map((gadget) => (
                    <Card key={gadget.id} gadget={gadget}></Card>
                ))}
            </div>
        </div>
    );
};

export default GadgetCards;

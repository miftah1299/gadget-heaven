import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import PropTypes from "prop-types";


const GadgetCards = () => {

    const data = useLoaderData();
    const { category } = useParams();

    const [gadgets, setgadgets] = useState([]);
    // useEffect for filtering data based on category
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(
                (gadget) => gadget.category === category
            );
            setgadgets(filteredByCategory);
        } else {
            setgadgets(data);
        }
    }, [category, data]);

    // console.log(category);

    return (
        <div className="grid grid-cols-5">
            <div
                role="tablist"
                className="tabs tabs-bordered max-w-screen-xl mx-auto col-span-1 flex flex-col gap-4 items-start bg-white rounded-md"
            >
                {/* {categories.map((category) => (
                    <NavLink
                        key={category.id}
                        to={`/category/${category.category}`}
                        role="tab"
                        className={({ isActive }) =>
                            `tab rounded-full bg-zinc-100 border-none shadow-none ${
                                isActive ? "tab-active" : ""
                            }`
                        }
                    >
                        {category.category}
                    </NavLink>
                ))} */}
            </div>

            <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gadgets.map((gadget) => (
                    <Card key={gadget.id} gadget={gadget}></Card>
                ))}
            </div>
        </div>
    );
};
// GadgetCards.propTypes = {
//     categories: PropTypes.array.isRequired,
// };

export default GadgetCards;

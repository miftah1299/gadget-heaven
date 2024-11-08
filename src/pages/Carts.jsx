import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getAllCarts, removeCart } from "../utilities";
import Card from "../components/Card";

const Carts = () => {
    const data = useLoaderData(); // fetch data from the loader
    // const { gadget } = useParams();

    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        const carts = getAllCarts();
        setGadgets(carts);
    }, []);

    const handleSort = () => {
        // sort by price
        const sorted = [...gadgets].sort((a, b) => b.price - a.price);
        setGadgets(sorted);
    };

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-baseline my-12">
                <div>
                    <h1 className="text-3xl font-bold">Carts</h1>
                </div>
                <div className="flex gap-6 items-baseline">
                    <h2 className="text-2xl font-semibold mb-2">
                        Total cost:{" "}
                    </h2>
                    <button
                        onClick={() => handleSort()}
                        className="border border-primary text-primary rounded-full px-6 py-4 text-lg font-bold"
                    >
                        Sort by Price
                    </button>
                    <button className="text-white bg-primary rounded-full px-6 py-4 text-lg font-bold">
                        Purchase
                    </button>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto space-y-6 pb-12">
                {gadgets.map((gadget) => (
                    <div
                        key={gadget.id}
                        className="flex gap-5 bg-white p-8 rounded-xl"
                    >
                        <div className="">
                            <img
                                className="w-52 h-32 rounded-xl"
                                src={gadget.product_image}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold">
                                    {gadget.product_title}
                                </h2>
                                <p className="text-lg">{gadget.description}</p>
                                <p className="text-lg font-semibold">
                                    Price: $ {gadget.price}
                                </p>
                            </div>

                            <div className="">
                                <button
                                    onClick={() => removeCart(gadget)}
                                    className="text-red-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-12"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Carts;

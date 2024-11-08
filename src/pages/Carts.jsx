import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getAllCarts, removeCart } from "../utilities";

const Carts = () => {
    const navigate = useNavigate();
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

    let totalPrice = gadgets.reduce((total, item) => total + item.price, 0);

    const [openModal, setOpenModal] = useState(false);
    const handlePurchase = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        localStorage.setItem("carts", JSON.stringify([]));
        // totalprice will be 0
        totalPrice = 0;
        setGadgets([]);
        setOpenModal(false);
        navigate("/");
    };

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-baseline my-12">
                <div>
                    <h1 className="text-3xl font-bold">Carts</h1>
                </div>
                <div className="flex gap-6 items-baseline">
                    <h2 className="text-2xl font-semibold mb-2">
                        Total cost: ${totalPrice.toFixed(2)}
                    </h2>
                    <button
                        onClick={() => handleSort()}
                        className="border border-primary text-primary rounded-full px-6 py-4 text-lg font-bold"
                    >
                        Sort by Price
                    </button>
                    <button
                        onClick={handlePurchase}
                        className="text-white bg-primary rounded-full px-6 py-4 text-lg font-bold"
                    >
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

            {openModal && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-10">
                    <div className="bg-white p-10 px-20 rounded-lg shadow-lg text-center space-y-3">
                        <div className="flex justify-center">
                            <img src="/src/assets/modal.png" alt="" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            Payment Successful
                        </h2>
                        <hr></hr>
                        <p className="text-lg">Thanks for purchasing</p>
                        <p className="text-lg mb-6">Total: {totalPrice}</p>
                        <button
                            onClick={handleCloseModal}
                            className="bg-base-200 w-full py-2 px-6 rounded-3xl hover:text-white hover:bg-primary font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carts;

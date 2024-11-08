import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorites } from "../utilities";
import Heading from "../components/Heading";

const GadgetDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [gadget, setgadget] = useState({});

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const singleData = data.find((gadget) => gadget.id == id);
        setgadget(singleData);

        const favorites = getAllFavorites();
        const isExist = favorites.find((item) => item.id == singleData.id);
        if (isExist) {
            setIsFavorite(true);
        }
    }, [data, id]);

    const {
        product_image,
        product_title,
        price,
        description,
        specification,
        rating,
    } = gadget || {};

    // handleFavorite function
    const handleFavorite = (gadget) => {
        addFavorite(gadget);
        setIsFavorite(true);
    };

    return (
        <div>
            <div className="bg-primary pb-56">
                <Heading
                    title="Product Details"
                    subtitleClassName="w-1/2 mx-auto"
                    subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                ></Heading>
            </div>

            <div className="max-w-6xl mx-auto p- bg-white rounded-3xl flex gap-4 relative -top-48 z-10">
                <div className="flex flex-col md:flex-row gap-4 p-6">
                    <img
                        className="w-full md:w-1/2 h-auto object-cover rounded-3xl"
                        src={product_image}
                        alt={product_title}
                    />
                    <div className="w-full md:w-1/2 space-y-4 pl-4">
                        <h1 className="text-3xl font-bold mb-2">
                            {product_title}
                        </h1>
                        <p className="text-xl text-gray-700 mb-2">
                            Price: ${price}
                        </p>

                        <button className="border border-green-700 text-green-700 font-medium rounded-full bg-green-50 py-1 px-2">
                            In Stock
                        </button>

                        <p className="text-gray-700 mb-4">{description}</p>
                        <h2 className="text-2xl font-semibold mb-2">
                            Specifications:
                        </h2>
                        <ul className="list-disc list-inside mb-4">
                            {specification &&
                                specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                        </ul>
                        <p className="text-xl text-gray-700 mb-4">
                            Rating: {rating} / 5
                        </p>
                        <div className="flex gap-4">
                            <button
                                
                                className="btn bg-primary text-white px-4 py-2 rounded-full"
                            >
                                Add to Cart
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </button>
                            <button disabled={isFavorite}
                                onClick={() => handleFavorite(gadget)} className="btn btn-circle bg-white hover:text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;

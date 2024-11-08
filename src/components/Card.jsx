import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ gadget }) => {
    const {
        id,
        product_image,
        product_title,
        price,
        description,
        Specification,
        rating,
    } = gadget || {};

    console.log(gadget);

    return (
        <div className="mt-4">
            <Link to={`gadgets/${id}`}>
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white p-4 transition duration-500 transform hover:scale-105">
                    <img
                        className="w-full h-48 object-cover rounded-md"
                        src={product_image}
                        alt={product_title}
                    />
                    <div className="px-6 py-4">
                        <h2 className="font-bold text-xl mb-2">
                            {product_title}
                        </h2>
                        <p className="text-gray-700 text-base">
                            Price: {price}
                        </p>

                        <button className="border border-primary rounded-full px-5 py-2 text-primary font-semibold hover:bg-primary hover:text-white">
                            View Details
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Card.propTypes = {
    gadget: PropTypes.object.isRequired,
};

export default Card;

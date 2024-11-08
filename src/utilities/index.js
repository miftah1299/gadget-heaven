import toast from "react-hot-toast";

// get all gadgets from local storage
const getAllCarts = () => {
    const allCarts = JSON.parse(localStorage.getItem("carts")) || [];
    return allCarts;
};

// get all gadgets from local storage
const getAllFavorites = () => {
    const allFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return allFavorites;
};

/*

*/

// add a gadget to local storage
const addCart = (gadget) => {
    // get all gadgets from local storage
    const carts = getAllCarts();
    const isExistCart = carts.find((item) => item.id === gadget.id);
    if (isExistCart) {
        return toast.error("Already Added to Carts");
    }

    // add the new gadget to the array
    carts.push(gadget);
    // stringify the array and store it in local storage
    localStorage.setItem("carts", JSON.stringify(carts));
    toast.success("Added to Carts");
};


//
// add a gadget to local storage
const addFavorite = (gadget) => {
    // get all gadgets from local storage
    const favorites = getAllFavorites();
    const isExist = favorites.find((item) => item.id === gadget.id);
    if (isExist) {
        return toast.error("Already Added to Favorites");
    }

    // add the new gadget to the array
    favorites.push(gadget);
    // stringify the array and store it in local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));
    toast.success("Added to Favorites");
};

/*


*/
// remove a gadget from local storage
const removeFavorite = (gadget) => {
    const favorites = getAllFavorites();
    const filteredFavorites = favorites.filter((item) => item.id !== gadget.id);
    localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
    toast.success("Removed from Favorites");
};

// remove a gadget from local storage
const removeCart = (gadget) => {
    const carts = getAllCarts();
    const filteredCarts = carts.filter((item) => item.id !== gadget.id);
    localStorage.setItem("carts", JSON.stringify(filteredCarts));
    toast.success("Removed from Carts");
};


export { addCart, getAllCarts, addFavorite, getAllFavorites, removeCart, removeFavorite };

import toast from "react-hot-toast";

// get all gadgets from local storage
const getAllFavorites = () => {
    // get all gadgets from local storage
    const allFavorates = JSON.parse(localStorage.getItem("favorites")) || [];
    return allFavorates;
};

/*

*/
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

export { addFavorite, getAllFavorites };

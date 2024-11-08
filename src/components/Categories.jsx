import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div className="grid grid-cols-5 max-w-screen-xl mx-auto">
            <div
                role="tablist"
                className="tabs tabs-bordered flex flex-col gap-6 items-start bg-white rounded-xl p-6 col-span-1"
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
        </div>
    );
};

export default Categories;

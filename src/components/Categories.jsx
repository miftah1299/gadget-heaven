import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div className="grid grid-cols-4">
            <div
                role="tablist"
                className="tabs tabs-bordered max-w-screen-xl mx-auto col-span-1 flex flex-col gap-4 items-start bg-white rounded-md"
            >
                {categories.map((category) => (
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
                ))}
            </div>
        </div>
    );
};

export default Categories;

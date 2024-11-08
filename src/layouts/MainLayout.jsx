// Desc: Main Layout for the application

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="bg-base-200">
            <Toaster />
            {/* Navbar */}
            <div className="">
                <Navbar />
            </div>

            {/* Main Section */}
            <div className="">
                {/* Dynamic content */}
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;

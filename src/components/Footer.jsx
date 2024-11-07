import Heading from "./Heading";

const Footer = () => {
    return (
        <footer className="footer max-w-screen-xl mx-auto flex flex-col space-y-0 items-center py-24">
            <div>
                <Heading
                    className="my-0"
                    titleClassName="text-black"
                    subtitleClassName="text-black/50"
                    title="Gadget Heaven"
                    subtitle="Leading the way in cutting-edge technology and innovation."
                />
            </div>
            <hr className="w-full" />

            <div className="flex gap-40 text-center text-black/50">
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-lg font-bold text-black">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-lg font-bold text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-lg font-bold text-black">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;

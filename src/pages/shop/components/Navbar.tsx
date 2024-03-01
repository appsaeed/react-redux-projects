import { Link, Outlet } from "react-router-dom";
import logo from '../../../../public/logo.png';
import useCarts from "../../../hooks/useCarts";
import useHead from "../../../hooks/useHead";
import shopSettings from "../assets/shopSettings";

export default function Navbar() {

    useHead({
        links: [
            {
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
                crossOrigin: "anonymous",
            },
            {
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
            },
        ],
    });


    const carts = useCarts();


    return (
        <>
            <nav className="bg-[#171C2A] py-4">
                <div className="navBar">
                    <Link to="/">
                        <img src={logo} alt={shopSettings.name} className=" max-h-10 max-w-[140px]" />
                    </Link>
                    <div className="flex gap-4">
                        <Link to="/shop" className="navHome" id="lws-home">
                            {" "}
                            Home{" "}
                        </Link>
                        <Link to="/shop/cart" className="navCart" id="lws-cart">
                            <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
                            <span id="lws-totalCart">{carts?.length}</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

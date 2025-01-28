// import logo from "../assets/logo.png";

import { User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardDrawer from "./CardDrawer";
import LogOutToogle from "./LogOutToogle";

const Header = () => {
    const menubar = [
        {
            label: "About",
            url: "#",
        },
        {
            label: "Faq",
            url: "#",
        },
    ];

    const [isAuthenticate, setisisAuthenticate] = useState(true);
    return (
        <div className="h-20 px-4 flex border justify-between items-center">
            {/* logo */}
            {/* <img className="h-[90px] object-contain" src={logo} alt="" /> */}

            <div className="flex space-x-5 items-center justify-center">
                {/* <ToogleMode /> */}
                <CardDrawer />

                {/* validation :Check user State */}
                <div>
                    {isAuthenticate ? (
                        <LogOutToogle />
                    ) : (
                        <Link to={"/login"}>
                            {" "}
                            <User strokeWidth={1.3} size={30} />{" "}
                        </Link>
                    )}
                </div>
            </div>
            {/* Store name */}
            <h1 className="font-semibold text-2xl">Ebay Store</h1>

            {/* menu */}
            <ul className="hidden sm:flex list-none  items-center space-x-5">
                {menubar.map((elem, index) => {
                    return (
                        <li className="font-medium text-[18px]" key={index}>
                            {elem.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Header;

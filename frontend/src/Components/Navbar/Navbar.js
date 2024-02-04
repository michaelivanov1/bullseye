import React, { useState } from "react";
import logo from "../../images/homepage/hero-section/logo.png";

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="p-6 bg-black bg-opacity-20"  style={{ height: '12vh' }}>
            {/* <div className="flex justify-center">
                <img src={logo} alt="Logo" />
              </div> */}
            <div className="lg:hidden">
                <button
                    onClick={toggleMobileMenu}
                    className="navbar-burger flex items-center text-blue-600 p-3 "
                >
                    <svg
                        className="block h-6 w-6 fill-current hover:bg-sky-700"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <div className="lg:flex lg:space-x-24 lg:justify-center lg:items-center">
                <ul
                    className={`${mobileMenuOpen ? "block" : "hidden"
                        } lg:flex lg:space-x-24 lg:items-center`}
                >
                    <li>
                        <a href="#" className="text-primary text-xl">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-primary text-xl">
                            Market Activity
                        </a>
                    </li>
                    <div className="flex justify-center">
                        <img src={logo} alt="Logo" />
                    </div>
                    <li>
                        <a href="#" className="text-primary text-xl">
                            Market News
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-primary text-xl">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Navbar;
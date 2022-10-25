import React, { useState } from 'react';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };
    return (
        <div className="bg-slate-500 py-2">
            <div className="flex justify-between items-center relative">
                <div>
                    <h2 className="text-3xl text-white">Logo</h2>
                </div>
                {/* desktop menu */}
                <ul className="md:flex hidden justify-center items-center gap-3 text-white">
                    <li>Home</li>
                    <li>Courses</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
                {/* mobile menu */}
                <div>
                    {!isMenu ? (
                        <VscMenu
                            className="text-white text-2xl cursor-pointer"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <VscChromeClose
                            className="text-white text-2xl cursor-pointer"
                            onClick={toggleMenu}
                        />
                    )}
                </div>
                {isMenu && (
                    <ul className="md:hidden flex flex-col justify-center items-center gap-3 absolute top-12 py-4 right-0 text-white bg-slate-500 w-full">
                        <li>Home</li>
                        <li>Courses</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>
                            <button className="bg-blue-500 px-3 py-2 rounded w-auto hover:bg-blue-600">
                                Login
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;

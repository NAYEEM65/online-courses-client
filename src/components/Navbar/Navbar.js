import React, { useState } from 'react';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };
    return (
        <div className="bg-slate-500 py-2 px-4">
            <div className="flex justify-between items-center relative">
                <NavLink to="/">
                    <h2 className="text-3xl text-white">Logo</h2>
                </NavLink>
                {/* desktop menu */}
                <ul className="md:flex hidden justify-center items-center gap-3 text-white">
                    <NavLink to="/">
                        {' '}
                        <li> Home</li>
                    </NavLink>
                    <NavLink to="/courses">
                        {' '}
                        <li>Courses</li>
                    </NavLink>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <NavLink to="/login">
                            <span className="bg-blue-500 hover:bg-blue-600 py-2 px-3 rounded">
                                Login
                            </span>
                        </NavLink>
                    </li>
                </ul>
                {/* mobile menu */}
                <div className="md:hidden flex">
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
                            <Link to="/login">
                                <span className="bg-blue-500 hover:bg-blue-600 py-2 px-3 rounded">
                                    Login
                                </span>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;

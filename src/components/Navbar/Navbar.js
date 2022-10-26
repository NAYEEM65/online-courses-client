import React, { useContext, useState } from 'react';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/Auth/AuthProvider';
import Loader from '../Loader/Loader';

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    const { user, logOut, isLoading, setIsLoading, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
                toast.success('Log out successful');
                setIsLoading(false);
                setUser(null);
            })
            .catch((error) => {
                toast.error(error.message);
                setIsLoading(false);
            });
    };
    return (
        <>
            {isLoading && <Loader />}
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
                        <NavLink to="/about">
                            <li>About</li>
                        </NavLink>

                        <NavLink to="/blog">
                            {' '}
                            <li>Blog</li>
                        </NavLink>

                        <NavLink to="/faq">
                            {' '}
                            <li>Faq</li>
                        </NavLink>
                        <NavLink to="/contact">
                            {' '}
                            <li>Contact</li>
                        </NavLink>
                        <li>
                            {user?.uid ? (
                                <span className="flex justify-between items-center gap-3">
                                    <span>{user?.displayName}</span>
                                    <img
                                        src={user?.photoURL}
                                        className="h-8 w-8 rounded-full"
                                        alt={user?.displayName}
                                    />
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 py-2 px-3 rounded"
                                        onClick={handleLogOut}
                                    >
                                        Log out
                                    </button>
                                </span>
                            ) : (
                                <span className="flex justify-between items-center gap-3">
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </span>
                            )}
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
        </>
    );
};

export default Navbar;

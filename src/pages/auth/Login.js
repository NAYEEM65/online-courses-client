import React, { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import LoginImage from '../../assets/access-account.svg';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPass, setIsShowPass] = useState(false);
    const handleShowPass = () => {
        setIsShowPass(!isShowPass);
    };
    return (
        <>
            {isLoading && <Loader />}
            <section className="w-full py-12 px-0 min-h-[80vh] flex justify-center items-center">
                <div className="hidden md:block animate-slide-down">
                    <img src={LoginImage} alt="Login" className="w-auto h-[55vh]" />
                </div>
                <div className="w-[36rem] p-10 text-center shadow-lg animate-slide-up">
                    <h2 className="text-3xl font-bold text-slate-700">Login</h2>
                    <form className="flex flex-col mt-5 w-full gap-2">
                        <div className="w-full inline-grid">
                            <input
                                type="email"
                                required
                                placeholder="Email"
                                className="rounded bg-slate-200 border-none"
                            />
                        </div>
                        <div className="w-full inline-grid relative">
                            <input
                                type={isShowPass ? 'text' : 'password'}
                                required
                                placeholder="Password"
                                className="rounded bg-slate-200 border-none"
                            />
                            {isShowPass ? (
                                <AiOutlineEyeInvisible
                                    className="absolute top-3 right-4 z-10 text-xl cursor-pointer"
                                    onClick={handleShowPass}
                                />
                            ) : (
                                <AiOutlineEye
                                    className="absolute top-3 right-4 z-10 text-xl cursor-pointer"
                                    onClick={handleShowPass}
                                />
                            )}
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded">
                            Login
                        </button>
                        <div className="text-left">
                            <Link to="/reset">
                                <span className="text-slate-700">Reset Password</span>
                            </Link>
                        </div>
                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t-2 border-slate-400"></div>
                            <span className="flex-shrink mx-2 text-slate-700">OR</span>
                            <div className="flex-grow border-t-2 border-slate-400"></div>
                        </div>
                        <div className="flex justify-between items-center gap-3">
                            <button className="bg-slate-600 cursor-pointer flex justify-center items-center gap-3 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded active:scale-90">
                                <FcGoogle className="h-5 w-5 rounded-full bg-gray-50" /> Login With
                                Google
                            </button>
                            <button className="bg-slate-600 cursor-pointer flex justify-center items-center gap-3 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded active:scale-90">
                                <AiFillGithub className="h-5 w-5 rounded-full" /> Login With Github
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;
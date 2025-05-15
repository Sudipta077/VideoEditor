'use client';
import React, { useState } from 'react';
import '../components/Hamburger.css';
import { motion, AnimatePresence } from 'framer-motion';
const Navbar: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const toggleMenu = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <div className="backdrop-filter backdrop-blur-lg bg-opacity-0 fixed top-0 px-15 text-amber-50 h-fit py-4 md:py-10 w-full flex justify-between items-center">
                <h1 className=" md:text-4xl sm:text-2xl text-xl font-anton text-amber-50">
                    Sudipta <span className="text-[#4ED7F1]">Paul</span>
                </h1>

                <nav className="hidden lg:flex">
                    <ul className="flex items-center sm:gap-5 md:gap-8 gap-2 text-md">
                        <li className="group flex items-center space-x-1 cursor-pointer">
                            <span className="text-2xl group-hover:text-[#4ED7F1]">[</span>
                            <span className="text-2xl transform transition-transform duration-300 group-hover:translate-x-12 group-hover:text-[#4ED7F1]">]</span>
                            <span className="group-hover:translate-x-[-17px] transform transition-transform duration-300 group-hover:text-[#4ED7F1] mt-1 ml-2">
                                Home
                            </span>
                        </li>
                        <li className="group flex items-center space-x-1 cursor-pointer">
                            <span className="text-2xl group-hover:text-[#4ED7F1]">[</span>
                            <span className="text-2xl transform transition-transform duration-300 group-hover:translate-x-12 group-hover:text-[#4ED7F1]">]</span>
                            <span className="group-hover:translate-x-[-17px] transform transition-transform duration-300 group-hover:text-[#4ED7F1] mt-1 ml-2">
                                About
                            </span>
                        </li>
                        <li className="group flex items-center space-x-1 cursor-pointer">
                            <span className="text-2xl group-hover:text-[#4ED7F1]">[</span>
                            <span className="text-2xl transform transition-transform duration-300 group-hover:translate-x-16 group-hover:text-[#4ED7F1]">]</span>
                            <span className="group-hover:translate-x-[-18px] transform transition-transform duration-300 group-hover:text-[#4ED7F1] mt-1 ml-2">
                                Projects
                            </span>
                        </li>
                        <li className="group flex items-center space-x-1 cursor-pointer">
                            <span className="text-2xl group-hover:text-[#4ED7F1]">[</span>
                            <span className="text-2xl transform transition-transform duration-300 group-hover:translate-x-16 group-hover:text-[#4ED7F1]">]</span>
                            <span className="group-hover:translate-x-[-18px] transform transition-transform duration-300 group-hover:text-[#4ED7F1] mt-1 ml-2">
                                Contact
                            </span>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger menu */}
                <div className="block lg:hidden">
                    <input
                        type="checkbox"
                        id="checkbox"
                        checked={show}
                        onChange={toggleMenu}
                        className="hidden"
                    />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>
            </div>

            <AnimatePresence>
                {show && (
                    <motion.div
                        key="mobileMenu"
                        initial={{
                            clipPath: 'inset(0% 0% 100% 0%)', // Hidden from bottom
                            opacity: 1,
                        }}
                        animate={{
                            clipPath: 'inset(0% 0% 0% 0%)', // Fully shown
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                ease: 'easeOut',
                            },
                        }}
                        exit={{
                            clipPath: 'inset(0% 0% 100% 0%)', // Hide from bottom up
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: 'easeInOut',
                            },
                        }}
                        className="w-full backdrop-filter backdrop-blur-lg bg-opacity-0 text-black 
                            p-5 z-50 shadow-lg lg:hidden absolute left-0"
                    >
                        <ul className="space-y-6 textlg sm:text-lg md:text-xl">
                            <li className="cursor-pointer text-amber-50 font-sans"><a href="#home">Home</a></li>
                            <li className="cursor-pointer text-amber-50 font-sans"><a href="#about">About</a></li>
                            <li className="cursor-pointer text-amber-50 font-sans"><a href="#projects">Projects</a></li>
                            <li className="cursor-pointer text-amber-50 font-sans"><a href="#contact">Contact</a></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

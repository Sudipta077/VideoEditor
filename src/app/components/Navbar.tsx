'use client';
import React, { useState, useEffect } from 'react';
import '../components/Hamburger.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import mylogo from '../../../public/mylogo.png'
const Navbar: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home'); // Track the active section

    const toggleMenu = () => {
        setShow((prev) => !prev);
    };

    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
            setActiveSection(id); // Update the active section
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section'); // Select all sections with IDs
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // Update the active section
                    }
                });
            },
            { threshold: 0.6 } // Trigger when 60% of the section is visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <div className="z-100 backdrop-filter backdrop-blur-lg fixed  top-5 left-[50%] translate-x-[-50%] px-5 md:px-5 lg:px-5 text-amber-50 h-16 lg:h-20 py-4 md:py-8 w-[95%] lg:w-[80%] flex justify-between items-center rounded-full bg-yellow-200/10">
                {/* <h1 className=" md:text-4xl sm:text-2xl text-xl font-anton text-amber-50">
                    Sudipta <span className="text-[#FFB22C]">Paul</span>
                </h1> */}

                <Image
                    src={mylogo}
                    alt="logo"
                    width={100}
                    height={100}
                    className='rounded-full w-10 h-10 md:w-14 md:h-14'
                ></Image>


                <nav className="hidden lg:flex ">
                    <ul className="flex items-center font-sans sm:gap-5 md:gap-4 gap-2 text-md">
                        <li
                            onClick={() => handleScrollToSection('home')}
                            className={`group flex items-center space-x-1 cursor-pointer ${activeSection === 'home' ? 'text-[#FFB22C]' : ''
                                }`}
                        >
                            <span className={`text-2xl group-hover:text-[#FFB22C]`}>[</span>
                            <span className={`text-2xl transform transition-transform duration-300 group-hover:translate-x-12 group-hover:text-[#FFB22C]
            ${activeSection === 'home' ? 'translate-x-12' : ''}`}>
                                ]
                            </span>
                            <span className={`group-hover:translate-x-[-17px] transform transition-transform duration-300 group-hover:text-[#FFB22C] mt-1 ml-2
            ${activeSection === 'home' ? 'translate-x-[-17px]' : ''}`}>
                                Home
                            </span>
                        </li>

                        <li
                            onClick={() => handleScrollToSection('skills')}
                            className={`group flex items-center space-x-1 cursor-pointer ${activeSection === 'skills' ? 'text-[#FFB22C]' : ''
                                }`}
                        >
                            <span className="text-2xl group-hover:text-[#FFB22C]">[</span>
                            <span className={`text-2xl transform transition-transform duration-300 group-hover:translate-x-12 group-hover:text-[#FFB22C]
            ${activeSection === 'skills' ? 'translate-x-12' : ''}`}>
                                ]
                            </span>
                            <span className={`group-hover:translate-x-[-15px] transform transition-transform duration-300 group-hover:text-[#FFB22C] mt-1 ml-2
            ${activeSection === 'skills' ? 'translate-x-[-15px]' : ''}`}>
                                Skills
                            </span>
                        </li>

                        <li
                            onClick={() => handleScrollToSection('qualification')}
                            className={`group flex items-center space-x-1 cursor-pointer ${activeSection === 'qualification' ? 'text-[#FFB22C]' : ''
                                }`}
                        >
                            <span className="text-2xl group-hover:text-[#FFB22C]">[</span>
                            <span className={`text-2xl transform transition-transform duration-300 group-hover:translate-x-24 group-hover:text-[#FFB22C]
            ${activeSection === 'qualification' ? 'translate-x-24' : ''}`}>
                                ]
                            </span>
                            <span className={`group-hover:translate-x-[-22px] transform transition-transform duration-300 group-hover:text-[#FFB22C] mt-1 ml-2
            ${activeSection === 'qualification' ? 'translate-x-[-22px]' : ''}`}>
                                Qualification
                            </span>
                        </li>


                        <li
                            onClick={() => handleScrollToSection('projects')}
                            className={`group flex items-center space-x-1 cursor-pointer ${activeSection === 'projects' ? 'text-[#FFB22C]' : ''
                                }`}
                        >
                            <span className="text-2xl group-hover:text-[#FFB22C]">[</span>
                            <span className={`text-2xl transform transition-transform duration-300 group-hover:translate-x-16 group-hover:text-[#FFB22C]
            ${activeSection === 'projects' ? 'translate-x-16' : ''}`}>
                                ]
                            </span>
                            <span className={`group-hover:translate-x-[-18px] transform transition-transform duration-300 group-hover:text-[#FFB22C] mt-1 ml-2
            ${activeSection === 'projects' ? 'translate-x-[-18px]' : ''}`}>
                                Projects
                            </span>
                        </li>

                        <li
                            onClick={() => handleScrollToSection('contact')}
                            className={`group flex items-center space-x-1 cursor-pointer ${activeSection === 'contact' ? 'text-[#FFB22C]' : ''
                                }`}
                        >
                            <span className="text-2xl group-hover:text-[#FFB22C]">[</span>
                            <span className={`text-2xl transform transition-transform duration-300 group-hover:translate-x-16 group-hover:text-[#FFB22C]
            ${activeSection === 'contact' ? 'translate-x-16' : ''}`}>
                                ]
                            </span>
                            <span className={`group-hover:translate-x-[-18px] transform transition-transform duration-300 group-hover:text-[#FFB22C] mt-1 ml-2
            ${activeSection === 'contact' ? 'translate-x-[-18px]' : ''}`}>
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
                            py-5 lg:px-15 md:px-10 px-5 z-50 shadow-lg lg:hidden fixed left-0 top-16"
                    >
                        <ul className="space-y-6 px-2 mt-2 text-lg sm:text-lg md:text-xl">
                            <li className="active:text-[#FFB22C] cursor-pointer text-amber-50 font-sans"><a href="#home">Home</a></li>
                            <li className="active:text-[#FFB22C] cursor-pointer text-amber-50 font-sans"><a href="#skills">Skills</a></li>
                            <li className="active:text-[#FFB22C] cursor-pointer text-amber-50 font-sans"><a href="#qualification">Qualification</a></li>
                            <li className="active:text-[#FFB22C] cursor-pointer text-amber-50 font-sans"><a href="#projects">Projects</a></li>
                            <li className="active:text-[#FFB22C] cursor-pointer text-amber-50 font-sans"><a href="#contact">Contact</a></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

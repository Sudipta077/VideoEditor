// 'use client'
import React from "react";
import Image from "next/image";
// import myphoto2 from '../../../public/myphoto2.png'
import arrow from '../../../public/arrow.png'
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
// import { SiFiverr } from "react-icons/si";
// import { FaSquareUpwork } from "react-icons/fa6";
import { ImArrowUpRight2 } from "react-icons/im";

const Home: React.FC = () => {

    return (
        <div className="h-screen grid-container md:h-auto lg:h-[710px] bg-background mx-auto bg-fixed" id="home">       

                <div className="pt-32 mx-auto text-center lg:text-left w-full lg:w-[80%] h-[400px] flex flex-col mt-12 gap-y-4">
                    
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.5,
                        }}

                        className="text-center text-4xl sm:text-4g md:text-7xl mt-[-12px] mb-5"><span className="text-amber-100 font-satisfy">Bring Your Story to</span> <span className="font-satisfy text-[#FFB22C]">Life</span></motion.h1>
                        
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.7,
                        }}

                        className="w-[80%] mx-auto font-sans text-sm sm:text-lg md:text-lg text-center font-extralight">
                        Where great stories meet killer edits — delivering more than what you pay for. . .
                    </motion.p>

                    <div className="flex gap-x-5 w-[60%] mx-auto items-center">

                        <Image
                            src={arrow}
                            alt="Profile picture"
                            height={1000}
                            width={500}
                            className="md:h-[100px] md:w-[100px] sm:h-[30px] sm:w-[30px] h-[60px] w-[60px] transform -rotate-12"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.4,
                            }}
                            className="bg-amber-600 rounded-full flex justify-center items-center px-3 gap-x-2 py-2 hover:cursor-pointer group"
                        >
                            <p className="font-semibold text-sm md:text-xl font-sans">Contact Me</p>
                            <ImArrowUpRight2 className="bg-amber-50 rounded-full text-2xl text-amber-600 p-1 transform transition-transform duration-200 group-hover:rotate-45" />

                        </motion.div>

                        <div className="bg-stext h-20 w-0 sm:w-[1px]"></div>

                    </div>


                   
                </div>
    

            </div>



  
    );
}
export default Home;
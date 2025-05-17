'use client'
import React from "react";
import Image from "next/image";
import myphoto2 from '../../../public/myphoto2.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
     const { ref, inView } = useInView({
    triggerOnce: false, // animate only once
    threshold: 0.1,     // when 10% of the component is visible
  });
    return (
        <div className="h-auto lg:h-[710px] bg-dev" id="home" ref={ref}>

            <div className="bg-dev md:px-15 sm:px-5 px-5 pt-24  flex flex-col-reverse lg:flex-row justify-between items-center">


                <div className="text-center lg:text-left w-full lg:w-1/2 h-[400px] flex flex-col mt-12 gap-y-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ?{ opacity: 1, x: 0 }:{}}
                        transition={{
                            duration: 0.4,
                        }}

                        className="text-[#4ED7F1] font-sans text-md sm:text-lg md:text-xl">Full Stack Engineer</motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ?{ opacity: 1, x: 0 }:{}}
                        transition={{
                            duration: 0.5,
                        }}

                        className="text-4xl sm:text-4g md:text-7xl mt-[-12px]">I'm <span className="text-[#4ED7F1] font-satisfy">Sudipta</span> <span className="font-satisfy">Paul</span></motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ?{ opacity: 1, x: 0 }:{}}
                        transition={{
                            duration: 0.7,
                        }}

                        className="font-sans text-sm sm:text-md md:text-lg">I'm a passionate full-stack developer focused on building impactful, user-centric web applications. With real-world experience delivering scalable and dynamic solutions, I strive to create seamless digital experiences. I value clean code, collaboration, and continuous learning, and I’m driven to contribute meaningfully to every project I work on.</motion.p>
                    <div className="text-amber-50 text-4xl mx-auto lg:mx-0  lg:text-3xl flex gap-x-8">


                        <motion.a
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ?{ opacity: 1, y: 0 }:{}}
                            transition={{
                                duration: 0.4,
                            }}
                            href="https://github.com/Sudipta077" target="_blank"><FaGithub title="GitHub Profile" className="hover:cursor-pointer hover:text-[#4ED7F1] transition hover:animate-bounce" />
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ?{ opacity: 1, y: 0 }:{}}
                            transition={{
                                duration: 0.6,
                            }}
                            href="https://www.linkedin.com/in/sudipta-paul-106564226/" target="_blank">
                            <FaLinkedin title="Linedin Profile" className="hover:cursor-pointer hover:text-[#4ED7F1] transition hover:animate-bounce" />
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ?{ opacity: 1, y: 0 }:{}}
                            transition={{
                                duration: 0.8,
                            }}
                            href="https://x.com/Sudipta20459564" target="_blank">
                            <FaXTwitter title="X Profile" className="hover:cursor-pointer hover:text-[#4ED7F1] transition hover:animate-bounce" />
                        </motion.a>

                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ?{ opacity: 1, x: 0 }:{}}
                    transition={{
                        duration: 0.7,
                    }}
                    className="w-full lg:w-1/2 flex object-cover justify-center lg:justify-end ">
                    <Image src={myphoto2} alt="Profile picture" height={1000} width={500} className="md:h-[500px] md:w-[500px] sm:h-[300px] sm:w-[300px] h-[300px] w-[300px]" />
                </motion.div>



            </div>
            
        </div>
    );
}
export default Home;
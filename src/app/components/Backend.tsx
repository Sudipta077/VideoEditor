'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdOutlineLaptopMac } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { SiAuth0 } from "react-icons/si";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Backend = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, // animate only once
        threshold: 0.2,     // when 10% of the component is visible
    });
    return (
        <>
            <div


                className='text-left font-sans p-5 text-2xl bg-dev h-[350px] rounded w-[340px] m-auto border md:w-[300px] lg:w-[350px] shadow-cyan-500/30 shadow-2xl'
            >
                <h1 className='text-2xl text-amber-50 flex items-center gap-2'>
                    <FaServer />
                    Backend
                </h1>

                <div className='text-amber-50 text-base mt-5 flex flex-wrap gap-2'>
                    <div

                        className='mt-2 border-b-[1px] border-r-[1px]  w-fit px-3 py-2 rounded flex gap-2 bg-[#1a2f38] text-lg items-center  hover:text-black hover:bg-green-500 transition group'
                    >
                        <FaNodeJs className='group-hover:animate-bounce' />
                        Node Js
                    </div>


                    <div

                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg bg-[#1a2f38] items-center transition group hover:bg-[#7a868c]'
                    >
                        <SiExpress className='text-gray-50 text-xl group-hover:animate-bounce' />
                        Express Js
                    </div>

                    <div

                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg bg-[#1a2f38] items-center transition group hover:text-black  hover:bg-white'
                    >
                        <SiSocketdotio className='text-gray-50 group-hover:text-black text-xl group-hover:animate-bounce' />
                        Web Sockets
                    </div>

                    <div

                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg bg-[#1a2f38] items-center transition group hover:bg-gray-900'
                    >
                        <RiSecurePaymentLine className='text-gray-50 text-xl group-hover:animate-bounce' />
                        JWT
                    </div>

                    <div

                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg bg-[#1a2f38] items-center transition group hover:bg-purple-600'
                    >
                        <SiAuth0 className='text-gray-50 text-xl group-hover:animate-bounce' />
                        AuthJs
                    </div>

                    <div

                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg bg-[#1a2f38] items-center transition group hover:bg-yellow-900'
                    >
                        <TbApi className='text-gray-50 text-xl group-hover:animate-bounce' />
                        REST
                    </div>








                </div>

            </div>
        </>
    );
}

export default Backend;
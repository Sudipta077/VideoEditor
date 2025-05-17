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

const Frontend = () => {
    return (
        
            <div
                
                className='text-left font-sans p-5 text-2xl bg-dev sm:h-[300px] h-[350px]  lg:h-[350px] rounded w-[340px] m-auto border md:w-[300px] lg:w-[350px] shadow-cyan-500/30 shadow-2xl'
            >
                <h1 className='text-2xl text-amber-50 flex items-center gap-2'>
                    <MdOutlineLaptopMac />
                    Frontend
                </h1>

                <div className='text-amber-50 text-base mt-5 flex flex-wrap gap-2'>
                    <div
                       
                        className='mt-2 border-b-[1px] border-r-[1px]  w-fit px-3 py-2 rounded flex gap-2 bg-[#1a2f38] text-lg items-center  hover:text-black hover:bg-[#61DBFB] transition group'
                    >
                        <FaReact className='group-hover:text-blue-800 group-hover:animate-bounce' />
                        React Js
                    </div>


                    <div
                    
                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg bg-[#1a2f38] items-center transition group hover:bg-black'
                    >
                        <RiNextjsLine className='text-gray-50 text-xl group-hover:animate-bounce' />
                        Next Js
                    </div>





                    <div
                     
                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg items-center bg-[#1a2f38] transition group hover:bg-[#3178C6]'
                    >
                        <SiTypescript className='group-hover:animate-bounce' />
                        Typescript
                    </div>

                    <div
                       
                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg items-center bg-[#1a2f38] hover:bg-amber-400 transition group'
                    >
                        <IoLogoJavascript className='group-hover:animate-bounce' />
                        Javascript
                    </div>

                    <div
                     
                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 bg-[#1a2f38] text-lg items-center hover:bg-orange-500 transition group'
                    >
                        <FaHtml5 className='group-hover:animate-bounce' />
                        HTML
                    </div>

                    <div
                    
                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex bg-[#1a2f38] gap-2 text-lg items-center hover:bg-blue-600 transition group'
                    >
                        <FaCss3 className='group-hover:animate-bounce' />
                        CSS
                    </div>

                    <div
                        
                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 bg-[#1a2f38] text-lg items-center hover:bg-red-900 transition group'
                    >
                        <SiRedux className='group-hover:animate-bounce' />
                        Redux
                    </div>
                    <div
                    
                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 bg-[#1a2f38] text-lg items-center hover:bg-[#F59F1D] transition group'
                    >
                        <IoMdSettings className='group-hover:animate-bounce' />
                        Context API
                    </div>
                </div>

            </div>
       
    );
}

export default Frontend;
'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdOutlineLaptopMac } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { SiAuth0 } from "react-icons/si";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsDatabaseFillCheck } from "react-icons/bs";


const Database = () => {
  


    return (
        <>
            <div
               
                className='text-left font-sans p-5 text-2xl bg-dev  h-[350px] rounded w-[340px] m-auto border md:w-[300px] lg:w-[350px] shadow-cyan-500/30 shadow-sm'
            >
                <h1 className='text-2xl text-amber-50 flex items-center gap-2'>
                    <BsDatabaseFillCheck />
                    Database
                </h1>

                <div className='text-amber-50 text-base mt-5 flex flex-wrap gap-2'>
                    <div
                      
                        className='mt-2 border-b-[1px] border-r-[1px]  w-fit px-3 py-2 rounded flex gap-2 bg-[#1a2f38] text-lg items-center   hover:bg-blue-900 transition group'
                    >
                        <GrMysql className='group-hover:animate-bounce' />
                        MySQL
                    </div>


                    <div
                     
                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg bg-[#1a2f38] items-center transition group hover:bg-[#336791]'
                    >
                        <BiLogoPostgresql className='text-gray-50 text-xl group-hover:animate-bounce' />
                        PostgreSQL
                    </div>

                    <div
                       
                        className='mt-2 border-b-[1px] border-r-[1px] w-fit px-3 py-2 rounded flex gap-2 text-lg bg-[#1a2f38] items-center transition group   hover:bg-green-800'
                    >
                        <SiMongodb className='text-gray-50  text-xl group-hover:animate-bounce' />
                        MongoDB
                    </div>




                </div>

            </div>
        </>
    );
}

export default Database;
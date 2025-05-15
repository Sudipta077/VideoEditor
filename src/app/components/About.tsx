'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { TbCloudComputing } from "react-icons/tb";
const About: React.FC = () => {
    return (
        <div className='py-5 bg-[#1a2f38] md:px-15 sm:px-5 px-5' id='skills'>
            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                }}
                className='text-center text-4xl'>
                Skills
            </motion.h1>

            <div className='flex border  justify-between gap-5 flex-wrap'>
             
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                    }}
                    className='text-left font-sans p-5 text-2xl bg-dev h-[300px] basis-1/4'>

                        <h1 className='text-2xl text-amber-50 flex items-center gap-2'>
                            <MdOutlineLaptopMac/>
                            Frontend</h1>
                        
                </motion.div>


            </div>






        </div>
    );
}

export default About;
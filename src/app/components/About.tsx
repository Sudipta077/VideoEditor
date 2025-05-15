'use client'
import { motion, AnimatePresence } from 'framer-motion';
const About:React.FC=()=>{
    return(
        <div className='mt-[150px] bg-[#183B4E]'>
                <motion.h1 className='text-center text-4xl'>
                    About <span className='text-[#4ED7F1]'>Me</span>
                </motion.h1>
           
        </div>
    );
}

export default About;
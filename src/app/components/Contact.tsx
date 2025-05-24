import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiFiverr } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";
const Contact: React.FC = () => {
    return (
        <>

        <div className="px-5 md:px-15 bg-gradient-to-b from-[#1a2f38] to-[#0f2027] h-auto pb-10 pt-10" id='contact'>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                transition={{
                    duration: 0.4,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className='text-amber-50 text-center text-3xl font-semibold text-shadow-2xs md:text-4xl lg:text-4xl'

            >
                Contact with <span className='text-[#4ED7F1]'>Me</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                transition={{
                    duration: 0.5,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className='text-center text-sm text-shadow-2xs md:text-base text-gray-300 w-full md:w-[50%] mx-auto'
            >
                Whether you have a question, a project idea, or just want to say hello, feel free to get in touch— I am always open to connecting and happy to chat.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                transition={{
                    duration: 0.5,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className='flex gap-x-2 md:gap-x-10 items-center justify-center mt-5 px-5'
            >
                <a href="https://github.com/Sudipta077" target='_blank'><FaGithub className='bg-dev hover:animate-bounce hover:text-[#4ED7F1] p-2 text-5xl rounded-full' />
                </a>
                <a href="https://www.linkedin.com/in/sudipta-paul-106564226/" target='_blank'>
                    <FaLinkedin className='bg-dev hover:animate-bounce hover:text-[#4ED7F1] p-2 text-5xl rounded-full' />
                </a>
                <a href="https://x.com/Sudipta20459564" target='_blank'>
                    <FaXTwitter className='bg-dev hover:animate-bounce hover:text-[#4ED7F1] p-2 text-5xl rounded-full' />
                </a>

                  <a href="https://www.fiverr.com/s/1qoQE50" target='_blank'>
                    <SiFiverr className='bg-dev hover:animate-bounce hover:text-[#4ED7F1] p-2 text-5xl rounded-full' />
                </a>
                  <a href="https://www.upwork.com/freelancers/~01b504ee86d4a07568?mp_source=share" target='_blank'>
                    <FaSquareUpwork className='bg-dev hover:animate-bounce hover:text-[#4ED7F1] p-2 text-5xl rounded-full' />
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                transition={{
                    duration: 0.5,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className='mt-5 shadow-cyan-500/30 shadow-2xl border-[0.5px] border-gray-600 w-fit mx-auto px-5 py-3 rounded-md font-sans'
            >
                <div className='flex items-center justify-center gap-x-3 text-xl text-amber-50 font-sans'>
                    <MdEmail className='text-md'/>
                    <h1>Email me at</h1>
                </div>
                <p className='mt-3 text-center text-2xl text-[#4ED7F1] hover:cursor-pointer hover:animate-pulse'><a href="mailto:paulsudipta929@gmail.com">paulsudipta929@gmail.com</a></p>

            </motion.div>
        </div>
 <div className='bg-dev border-t-[1px] px-5 py-10 border-gray-600 flex items-center text-gray-400 text-sm'>
                <p className='mx-auto'>&copy; Sudipta Paul. All rights reserved</p>
            </div>
        </>
    );
}
export default Contact;
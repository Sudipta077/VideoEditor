import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import QualificationCard from './QualificationCard';
import { devexp, education } from "../data/devexp";

const Qualification: React.FC = () => {



    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
    return (
        <div id="qualification" className="bg-gradient-to-b from-[#1a2f38] to-[#0f2027] 
 h-auto pt-15 md:px-15 px-5 py-5 ">
            <motion.h1

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className='text-amber-50 text-center text-3xl font-semibold text-shadow-2xs md:text-4xl lg:text-4xl'
            >

                Qualificati<span className='text-[#4ED7F1]'>on</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="shadow-cyan-500/30 shadow-lg flex gap-2 font-sans bg-[#1a2f38] w-fit px-2 py-2 mx-auto my-5 items-center rounded-xl"
            >
                <button
                    className={` hover:bg-dev hover:cursor-pointer border-b-[3px] border-dev px-3 py-2 rounded-lg transition ${activeTab === 'experience' ? 'bg-dev text-[#4ED7F1]' : 'text-white'
                        }`}
                    onClick={() => setActiveTab('experience')}
                >
                    Experience
                </button>
                <button
                    className={` hover:bg-dev hover:cursor-pointer border-b-[3px] border-dev px-3 py-2 rounded-lg transition ${activeTab === 'education' ? 'bg-dev text-[#4ED7F1]' : 'text-white'
                        }`}
                    onClick={() => setActiveTab('education')}
                >
                    Education
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto px-4 text-white transition"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab} // THIS is what triggers the animation when toggling
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <QualificationCard data={activeTab === 'experience' ? devexp : education} />
                    </motion.div>
                </AnimatePresence>
            </motion.div>



        </div>
    );
}

export default Qualification;
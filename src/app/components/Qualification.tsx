'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import QualificationCard from './QualificationCard';
import { devexp, education } from "../data/devexp";

const Qualification: React.FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, // animate only once
        threshold: 0.2,     // when 10% of the component is visible
    });

    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
    return (
        <div id="qualification" className="bg-dev h-auto pt-15 md:px-15 px-5 py-5 " ref={ref}>
            <motion.h1

                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className='text-center text-3xl font-semibold text-shadow-2xs md:text-4xl lg:text-4xl'
            >

                Qualificati<span className='text-[#4ED7F1]'>on</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
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
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7 }}
                className="max-w-4xl mx-auto px-4 text-white transition"
            >


                <QualificationCard data={activeTab === 'experience' ? devexp : education} />


            </motion.div>


        </div>
    );
}

export default Qualification;
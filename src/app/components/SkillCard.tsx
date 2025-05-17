'use client'
import { motion } from 'framer-motion';

import "react-multi-carousel/lib/styles.css";




const SkillCard = ({ item,inView }: any) => {

    const Icon = item.icon;
    console.log(item);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className='text-left font-sans p-5 text-lg sm:text-xl md:text-2xl bg-dev h-[350px] rounded-xl shadow-cyan-500/30 shadow-lg sm:shadow-xl w-[90%] mx-auto'
            >
                <h1 className='text-xl md:text-xl text-amber-50 flex items-center gap-2'>
                    <Icon />
                    {item.title}
                </h1>

                <div className='text-amber-50 text-base mt-5 flex flex-wrap gap-2'>

                    {
                        item && item.skills && item.skills.map((data: any, key: any) => {
                            const Icon2 = data.icon;  // declare inside the block
                            return (
                                <div
                                    key={key}
                                    className={`mt-2 border-b-[3px] border-r-[2px] border-gray-400 w-fit px-3 py-2 rounded flex gap-2 bg-[#1a2f38] text-md lg:text-lg items-center ${data.hoverColor} transition group`}
                                >
                                    <Icon2 className='group-hover:animate-bounce' />
                                    {data.name}
                                </div>
                            );
                        })
                    }

                </div>

            </motion.div>
        </>
    );
}

export default SkillCard;
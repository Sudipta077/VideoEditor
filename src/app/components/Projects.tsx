'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Carousel from "react-multi-carousel";
import { software } from '../data/projects';
import Image from 'next/image';
import myphoto from '../../../public/myphoto.png'
const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
    const { ref, inView } = useInView({
        triggerOnce: false, // animate only once
        threshold: 0.2,     // when 10% of the component is visible
    });


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3, partialVisibilityGutter: 0
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 0
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 0
        }
    };

    return (
        <div className="bg-[#1a2f38] h-auto pt-15 md:px-15 px-5 py-5 " ref={ref} id='projects'>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className='text-center text-3xl font-semibold text-shadow-2xs md:text-4xl lg:text-4xl'
            >
                <span className='text-[#4ED7F1]'>Pro</span>jects
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
                    Software
                </button>
                <button
                    className={` hover:bg-dev hover:cursor-pointer border-b-[3px] border-dev px-3 py-2 rounded-lg transition ${activeTab === 'education' ? 'bg-dev text-[#4ED7F1]' : 'text-white'
                        }`}
                    onClick={() => setActiveTab('education')}
                >
                    Hardware
                </button>
            </motion.div>

            <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                autoPlay={false}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                itemClass=""
                ssr={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className='w-full h-[400px] z-10'
            >
                {
                    software && software.map((item: any, key: any) => (
                        <div className='h-[500px] w-[90%] bg-dev '>
                            <div className=' overflow-hidden h-[250px] object-bottom-right  w-full'>
                                <Image
                                    src={myphoto}
                                    alt={item.title}
                                    width={500}
                                    height={550}
                                    className='h-fit w-full'
                                />
                            </div>
                            <h1 className='text-5xl text-black z-100'>{item.title}</h1>
                        </div>

                    ))
                }
            </Carousel>




        </div>
    );
}
export default Projects;
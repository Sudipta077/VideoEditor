import {motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Carousel from "react-multi-carousel";
import { software, hardware } from '../data/projects';
import ProjectCard from './ProjectCard';
const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'software' | 'hardware'>('software');
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
        <div className="bg-gradient-to-b from-[#0f2027] to-[#1a2f38]  h-auto pt-15 md:px-15 px-5 py-5 font-sans" ref={ref} id='projects'>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className='text-center text-3xl font-semibold text-shadow-2xs md:text-4xl lg:text-4xl w-fit mx-auto'
            >
                <span className='text-[#4ED7F1]'>Pro</span>jects
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="shadow-cyan-500/30 shadow-lg flex gap-2 font-sans bg-[#1a2f38] w-fit px-2 py-2 mx-auto my-5 items-center rounded-xl"
            >
                <button
                    className={` hover:bg-dev hover:cursor-pointer border-b-[3px] border-dev px-3 py-2 rounded-lg transition ${activeTab === 'software' ? 'bg-dev text-[#4ED7F1]' : 'text-white'
                        }`}
                    onClick={() => setActiveTab('software')}
                >
                    Software
                </button>
                <button
                    className={` hover:bg-dev hover:cursor-pointer border-b-[3px] border-dev px-3 py-2 rounded-lg transition ${activeTab === 'hardware' ? 'bg-dev text-[#4ED7F1]' : 'text-white'
                        }`}
                    onClick={() => setActiveTab('hardware')}
                >
                    Hardware
                </button>
            </motion.div>
            <div className="w-full max-w-full overflow-hidden">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    arrows={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    showDots={false}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                    ssr={true}
                    autoPlaySpeed={3000}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    className='w-full h-[500px] z-10'
                >
                    {
                        (activeTab === 'software' ? software : hardware).map((data, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ProjectCard item={[data]} /> {/* Pass single project as an array */}
                            </motion.div>
                        ))
                    }
                </Carousel>
            </div>

        </div>
    );
}
export default Projects;
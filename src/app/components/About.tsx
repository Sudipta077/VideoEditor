'use client';
import { motion } from 'framer-motion';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import skillcard from '../data/skillCard';
import SkillCard from './SkillCard';
// import { FaChevronRight } from "react-icons/fa6";
// import { FaChevronLeft } from "react-icons/fa";
const About: React.FC = () => {
    
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
        <div
           
            className='py-5 bg-gradient-to-b from-[#0f2027] to-[#1a2f38]
 sm:px-5 mx-0 pt-10 w-full'
            id='skills'
        >
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false,amount: 0.2  }}
                transition={{ duration: 0.4 }}
                className='text-amber-50 text-center text-3xl font-semibold text-shadow-2xs md:text-4xl lg:text-4xl'
            >
                Ski<span className='text-[#4ED7F1]'>ll</span>s
            </motion.h1>

            {/* <div className='flex mt-10 justify-between gap-1 lg:gap-5 flex-wrap '> */}
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

                className='w-full h-[460px] z-10'
            >
                {
                    skillcard && skillcard.map((item, key) => (
                        <SkillCard item={item} key={key} />
                    ))
                }
            </Carousel>


            {/* </div> */}
        </div>
    );
};

export default About;

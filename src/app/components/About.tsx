'use client';
import { motion } from 'framer-motion';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useInView } from 'react-intersection-observer';
import skillcard from '../data/skillCard';
import SkillCard from './SkillCard';
// import { FaChevronRight } from "react-icons/fa6";
// import { FaChevronLeft } from "react-icons/fa";
const About: React.FC = () => {
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
        <div
            ref={ref}
            className='py-5 bg-[#1a2f38] sm:px-5 mx-0 pt-10 w-full'
            id='skills'
        >
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className='text-center text-3xl font-semibold text-shadow-2xs md:text-4xl lg:text-4xl'
            >
                Ski<span className='text-[#4ED7F1]'>ll</span>s
            </motion.h1>

            {/* <div className='flex mt-10 justify-between gap-1 lg:gap-5 flex-wrap '> */}
            <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                autoPlay={true}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                itemClass=""
                ssr={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // customLeftArrow={
                //     <div
                //         onClick={(e) => {
                //             // @ts-ignore
                //             if (typeof (e as any).stopPropagation === "function") (e as any).stopPropagation();
                //             // @ts-ignore
                //             if (typeof (e as any).preventDefault === "function") (e as any).preventDefault();
                //             // @ts-ignore
                //             if (typeof (window as any).carouselLeftArrowClick === "function") (window as any).carouselLeftArrowClick(e);
                //         }}
                //         className="absolute left-0 top-1/2 -translate-y-1/2 z-0 p-2 rounded-full cursor-pointer text-2xl hover:bg-black brightness-50 transition"
                //     >
                //     <FaChevronLeft/>
                //     </div>
                // }
                // customRightArrow={
                //     <div
                //         onClick={(e) => {
                //             // @ts-ignore
                //             if (typeof (e as any).stopPropagation === "function") (e as any).stopPropagation();
                //             // @ts-ignore
                //             if (typeof (e as any).preventDefault === "function") (e as any).preventDefault();
                //             // @ts-ignore
                //             if (typeof (window as any).carouselRightArrowClick === "function") (window as any).carouselRightArrowClick(e);
                //         }}
                //         className="absolute right-0 top-1/2 -translate-y-1/2 z-0 p-2 rounded-full cursor-pointer text-2xl hover:bg-black brightness-50 transition"
                //     >
                //         <FaChevronRight/>
                //     </div>
                // }


                className='w-full h-[460px] z-10'
            >
                {
                    skillcard && skillcard.map((item, key) => (
                        <SkillCard item={item} key={key} inView={inView} />
                    ))
                }
            </Carousel>


            {/* </div> */}
        </div>
    );
};

export default About;

import Image from "next/image";
import myphoto from '../../../public/myphoto.png';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

interface data {
    title: string;
    image: string;
    description: string[];
    github: string;
    deploy: string;
}

interface ProjectCardProps {
    item: data[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
    const data = item[0]; // Single project
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mt-8 relative flex w-[95%] mx-auto flex-col rounded-xl bg-dev bg-clip-border shadow-md group/card font-sans border-[0.5px] border-gray-600"
        >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-cyan-500/30 shadow-lg">
                <Image
                    src={myphoto}
                    alt={data.title}
                    width={500}
                    height={750}
                    className="w-auto h-auto min-h-full min-w-full object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-110"
                />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {data.title}
                </h5>
                <ul style={{ listStyleType: "disc", marginLeft: 20, marginTop: 10 }}>
                    {data.description.map((desc: string, key: number) => (
                        <li key={key} className="text-sm">{desc}</li>
                    ))}
                </ul>
            </div>
            <div className="p-6 pt-0">
                <div className="flex gap-x-5">
                    {data.github && (
                        <a href={data.github} target="_blank">
                            <div className="group/github justify-between flex gap-2 items-center border-[0.5px] border-gray-500 w-fit px-2 py-1 rounded-md mt-3 hover:bg-black hover:text-[#4ED7F1] transition">
                                <FaGithub className="group-hover/github:animate-bounce" />
                                <h3 className="text-sm">code</h3>
                            </div>
                        </a>
                    )}
                    {data.deploy && (
                        <a href={data.deploy} target="_blank">
                            <div className="justify-between flex gap-2 items-center border-[0.5px] border-gray-500 w-fit px-2 py-1 rounded-md mt-3 hover:bg-black transition">
                                <FaExternalLinkAlt />
                                <h3 className="text-sm">Live</h3>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};


export default ProjectCard;

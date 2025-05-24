import Image,{ StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import chatfinity from '../../../public/Chatfinity.png';
import anonymous from '../../../public/anonymchat.png';
import ecomm from '../../../public/ecomm.png';
import drone from '../../../public/drone.png';
import portfolio from '../../../public/portfolio.png';

interface Project {
    title: string;
    image: string; // Image name (e.g., "chatfinity")
    description: string[];
    github: string;
    deploy: string;
    category: string;
    _id: string;
}

interface ProjectCardProps {
    item: Project; // Single project object
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
    // Map of image names to imported images
    const imageMap: { [key: string]:StaticImageData } = {
        chatfinity: chatfinity,
        anonymous: anonymous,
        ecomm: ecomm,
        drone: drone,
        portfolio: portfolio,
    };

    // Get the corresponding image from the map
    const projectImage: StaticImageData | undefined  = imageMap[item.image] || null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mt-8 relative flex w-[95%] mx-auto flex-col rounded-xl bg-dev bg-clip-border shadow-md group/card font-sans border-[0.5px] border-gray-600"
        >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-cyan-500/30 shadow-xl">
                {projectImage ? (
                    <Image
                        src={projectImage}
                        alt={item.title}
                        width={500}
                        height={750}
                        className="w-auto h-auto min-h-full min-w-full object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700">
                        No Image
                    </div>
                )}
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-amber-50 antialiased">
                    {item.title}
                </h5>
                <ul style={{ listStyleType: "disc", marginLeft: 20, marginTop: 10 }}>
                    {item.description.map((desc: string, key: number) => (
                        <li key={key} className="text-sm text-gray-300">
                            {desc}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-6 pt-0">
                <div className="flex gap-x-5">
                    {item.github && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                            <div className="group/github justify-between flex gap-2 items-center border-[0.5px] border-gray-500 w-fit px-2 py-1 rounded-md mt-3 hover:bg-black hover:text-[#4ED7F1] transition">
                                <FaGithub className="group-hover/github:animate-bounce" />
                                <h3 className="text-sm">Code</h3>
                            </div>
                        </a>
                    )}
                    {item.deploy && (
                        <a href={item.deploy} target="_blank" rel="noopener noreferrer">
                            <div className="justify-between flex gap-2 items-center border-[0.5px] border-gray-500 w-fit px-2 py-1 rounded-md mt-3 hover:bg-black hover:text-[#4ED7F1] transition">
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

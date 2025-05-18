import Image from "next/image";
import myphoto from '../../../public/myphoto.png';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  item: {
    title: string;
    image: string;
    description: string[];
    github: string;
    deploy: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({item}) => {

   const { title, description, github, deploy } = item;
    return (
        <div className="mt-8 relative flex w-[95%] mx-auto flex-col rounded-xl bg-dev bg-clip-border shadow-md group/card">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-cyan-500/30 shadow-lg">
                <Image
                    src={myphoto}
                    alt={title}
                    width={500}
                    height={750}
                    className="w-auto h-auto min-h-full min-w-full object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-110"
                />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h5>
                <ul style={{ listStyleType: "disc", marginLeft: 20, marginTop: 10 }}>
                    {description.map((desc: string, key: number) => (
                        <li key={key} className="text-sm">{desc}</li>
                    ))}
                </ul>
            </div>
            <div className="p-6 pt-0">
                <div className="flex gap-x-5">
                    <a href={github} target="_blank">
                        <div className="group/github justify-between flex gap-2 items-center border-[0.5px] border-gray-500 w-fit px-2 py-1 rounded-md mt-3 hover:bg-black transition">
                            <FaGithub className="group-hover/github:animate-bounce" />
                            <h3 className="text-sm">code</h3>
                        </div>
                    </a>

                    {deploy && (
                        <a href={deploy} target="_blank">
                            <div className="justify-between flex gap-2 items-center border-[0.5px] border-gray-500 w-fit px-2 py-1 rounded-md mt-3 hover:bg-black transition">
                                <FaExternalLinkAlt />
                                <h3 className="text-sm">Live</h3>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

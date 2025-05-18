interface item{
    title:String,
        organization:String,
        start_date:String,
        end_date:String,
        description:String
}

interface ExperienceProps {
    data: item[];
}
const Experience: React.FC<ExperienceProps> = ({ data }) => {
    return (

        <div className="">
            {
                data && data.map((data: any, key: number) => (
                    <div className="mt-10 mb-5 border-b-[0.5px] border-gray-400 pb-5 font-sans" key={key}>
                        {/* You can replace with mapped experiences later */}
                        <div className="flex justify-between">
                            <div className="w-2/3">
                                <h3 className="text-md md:text-xl font-bold">{data.organization}</h3>
                                <p className="text-sm md:text-md font-semibold">{data.title}</p>
                            </div>
                            <p className="w-1/3 text-xs md:text-sm text-end">{data.start_date} - {data.end_date}</p>
                        </div>
                        <p className=" mt-3 text-sm md:text-base">{data.description}</p>
                    </div>
                ))
            }

        </div>
    );
}
export default Experience;
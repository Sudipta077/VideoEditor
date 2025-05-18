interface experience {
    title: String,
    organization: String,
    start_date: String,
    end_date: String,
    description: String
}

const devexp: experience[] = [
    {
        title: "MERN Stack Developer",
        organization: "Bloghunch Software Private Limited",
        start_date: "July 2024",
        end_date: "October 2024",
        description: "I worked on a project for BitByteBinary, an edutech platform. I developed new features using Next.js, built the mobile app in React Native, fixed frontend bugs, and regularly attended client meetings to discuss issues and implement requested features in coordination with the backend developer."
    },
    {
        title: "MERN Stack Developer",
        organization: "Ardent Computech Private limited",
        start_date: "Feb 2023",
        end_date: "April 2023",
        description: "Built a full-stack application using the MERN stack with features like authentication, REST APIs, and real-time updates. Handled both frontend and backend, ensuring performance, scalability, and responsive UI."
    }
]

const education:any[]=[
     {
        title:"Bachelor of Technology",
        organization:"Future Institute of Engineering and Management",
        start_date:"Aug 2020",
        end_date:"July 2024",
        description:"Electronics and Communication Engineering"
    },
     {
        title:"Higher Secondary",
        organization:"Baruipur High School",
        start_date:"Jan 2019",
        end_date:"March 2020",
        description:"Science"
    },
      {
        title:"Secondary",
        organization:"Baruipur High School",
        start_date:"Jan 2017",
        end_date:"March 2018",
        description:"Science"
    }
]


export {devexp,education};
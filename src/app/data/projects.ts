interface Project {
    title: string;
    image: string; // Path to the image
    description: string[]; // Array of description strings
    github: string; // URL to the GitHub repository
    deploy: string; // URL to the deployed project
}
const software: Project[] = [
    {
        title: "Real-Time Chat App",
        image: "../../../public/myphoto.png",
        description: [
            "Built using MERN stack, Socket.IO for real-time messaging.",
            "Integrated Redis Pub/Sub and Kafka for scalability and fault-tolerant message queuing."
        ],
        github: "https://github.com/username/chat-app",
        deploy: "https://chatapp.example.com"
    },
    {
        title: "E-Commerce Platform",
        image: "../../../public/myphoto.png",
        description: [
            "Developed full-featured e-commerce app with cart, payment, and admin dashboard.",
            "Used React, Express, MongoDB, Stripe API, and JWT-based auth."
        ],
        github: "https://github.com/username/ecommerce-platform",
        deploy: "https://shop.example.com"
    },
    {
        title: "BlogHunch CMS",
        image: "../../../public/myphoto.png",
        description: [
            "Custom CMS built for BlogHunch to manage posts, media, and authors.",
            "Implemented role-based access and image uploads via AWS S3."
        ],
        github: "https://github.com/username/bloghunch-cms",
        deploy: "https://bloghunch.example.com"
    },
    {
        title: "Fitness Tracker App",
        image: "../../../public/myphoto.png",
        description: [
            "Mobile app built with React Native to track workouts and progress.",
            "Synced with backend using REST API and local SQLite for offline access."
        ],
        github: "https://github.com/username/fitness-tracker",
        deploy: "https://fitnessapp.example.com"
    },
    {
        title: "CourseHub – EdTech Platform",
        image: "../../../public/myphoto.png",
        description: [
            "Frontend built using Next.js for BitByteBinary course platform.",
            "Added new features, fixed bugs, and developed mobile version in React Native."
        ],
        github: "https://github.com/username/coursehub",
        deploy: "https://bitbytebinary.com"
    }
];

export {software};
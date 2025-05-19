interface Project {
    title: string;
    image: string; // Path to the image
    description: string[]; // Array of description strings
    github: string; // URL to the GitHub repository
    deploy: string; // URL to the deployed project
}
const software: Project[] = [
    {
        title: "Scalable Chatting App",
        image: "../../../public/myphoto.png",
        description: [
            "Google Sign-In via Auth.js",
            "Real-time chat with Socket.io",
            "Redux used for state management",
            "Scalable messaging using Redis, Kafka",
            "AI replies powered by Gemini Flash"
        ],
        github: "https://github.com/Sudipta077/chatfinity-frontend",
        deploy: ""
    },
    {
        title: "E-Commerce Platform",
        image: "../../../public/myphoto.png",
        description: [
            "Built E-commerce app with clean UI",
            "Added product browsing and filtering",
            "Implemented role-based JWT auth",
            "Created admin dashboard for management",
            "Used MERN stack for development"
        ],
        github: "https://github.com/Sudipta077/Cartify_2.0-main-main",
        deploy: ""
    },
    {
        title: "Anonymous messaging app",
        image: "../../../public/myphoto.png",
        description: [
            "Anonymous chat without user identity",
            "AI suggests smart message replies",
            "Built with clean, attractive UI",
            "Secure Auth.js-based user handling",
            "Stored messages with MongoDB backend"
        ],
        github: "https://github.com/Sudipta077/anonymous-messaging-app",
        deploy: "https://anonymous-messaging-app-pied.vercel.app/login"
    },
    {
        title: "Portfolio",
        image: "../../../public/myphoto.png",
        description: [
            "Showcased projects with clean layout",
            "Animated transitions for smooth experience",
            "Interactive and responsive home page",
            "Built-in contact form with email support",
            "Modern UI with professional design"
        ],
        github: "https://github.com/Sudipta077/SharmitaMondalWebsite",
        deploy: "https://sharmitamondal.netlify.app/"
    }
];

const hardware: Project[] = [
    {
        title: "Fire Extinguisher Drone",
        image: "../../../public/myphoto.png",
        description: [
            "Mid-size drone model FX-450",
            "Carries up to 2kg payload",
            "200-meter remote operation range",
            "30-minute maximum flight duration",
        ],
        github: "",
        deploy: ""
    },
]

export { software,hardware };
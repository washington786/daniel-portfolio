import { motion } from "framer-motion";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, DevicePhoneMobileIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

type Project = {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    liveDemo?: string;
    type: 'Mobile' | 'Web';
};

const Projects = () => {
    const projects: Project[] = [
        {
            title: "Resellit Mobile Application",
            description: "Full-featured Mobile Application",
            tags: ["Expo", "TypeScript", "React Native", "RN Paper", "Express API", "Vercel"],
            github: "https://github.com/washington786/ReSellIt.git",
            liveDemo: "#",
            type: 'Mobile',
        },
        {
            title: "SnapBuy Mobile Application",
            description: "Online Store Mobile Application, with cart, search and payment features enabling users to make products purchase.",
            tags: ["Expo", "TypeScript", "React Native", "RN Paper", "Express API", "Vercel", "MongoDB", "React Query", "Stripe", "Redux tool-kit"],
            github: "https://github.com/washington786/SnapBuy.git",
            liveDemo: "#",
            type: 'Mobile',
        },
        {
            title: "Chordly Mobile Application",
            description: "Online Music Player Application, with features that enable user to upload their songs and listen to other people's songs like sportify.",
            tags: ["Expo", "TypeScript", "React Native", "RN Paper", "Express API", "Vercel", "MongoDB", "React Query", "Redux tool-kit"],
            github: "https://github.com/washington786/chordly.git",
            liveDemo: "#",
            type: 'Mobile',
        },

        {
            title: "Shopy E-commerce Platform",
            description: "A full-stack e-commerce application built with ASP.NET Core (Backend) and Angular (Frontend). Features include user authentication, product catalog, shopping cart, and secure payment integration via Stripe.",
            tags: ["ASP.NET Core", "Entity Framework Core", "Angular", "SQL Server", "Docker", "Stripe API", "Angular Material", "Tailwind Css", "Jwt token Security"],
            github: "https://github.com/washington786/shopy-application",
            liveDemo: "https://shopy-application-ui.onrender.com",
            type: 'Web',
        },
        {
            title: "Issue Tracker UI",
            description: "The Issue Tracker UI is a web application to manage issues, built with a React frontend packaged via Docker and served by Nginx, interfacing with a backend API developed in Node.js using the Express framework, and utilizing Redis for caching or background job processing like email handling.",
            tags: ["React", "Docker", "Nginx", "Node.js", "Express", "Redis", "Tailwind Css", "Ant Design", "Context ApI", "React Query", "Typescript", "Mailtrap", "Jwt Security"],
            github: "https://github.com/washington786/issue-tracker-ui",
            liveDemo: "https://ui-n9zz.onrender.com",
            type: 'Web',
        },
        {
            title: "Ubuntu FX",
            description: "Ubuntu FX is a professional trading journal application designed for Forex traders to track, analyze, and optimize their trading performance. The dashboard provides powerful tools for recording trades, analyzing performance metrics, and improving trading strategies.",
            tags: ["Ant Design", "Tailwind Css", "React", "Vite", "React Query", "Context Hook API", "Typescript", "Docker"],
            github: "https://github.com/washington786/ubuntuFx.git",
            liveDemo: "ubuntu-fx-3f57-67swhrkwb-washington786s-projects.vercel.app",
            type: 'Web',
        },
    ];

    const renderTypeIcon = (type: 'Mobile' | 'Web') => {
        if (type === 'Mobile') {
            return (
                <DevicePhoneMobileIcon className="w-4 h-4 text-green-600 mr-1" />
            );
        } else {
            return (
                <ComputerDesktopIcon className="w-4 h-4 text-blue-600 mr-1" />
            );
        }
    };

    const getTypeTagColor = (type: 'Mobile' | 'Web') => {
        if (type === 'Mobile') {
            return 'bg-green-100 text-green-800';
        } else {
            return 'bg-blue-100 text-blue-800';
        }
    };

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Interactive showcases of my work. Click "View Demo" to explore.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Project Header with Title and Type Tag */}
                            <div className="p-6 pb-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getTypeTagColor(project.type)}`}>
                                        {renderTypeIcon(project.type)}
                                        {project.type}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons Section */}
                            <div className="p-6 pt-0 mt-auto">
                                <div className="flex space-x-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                                        >
                                            <CodeBracketIcon className="w-5 h-5 mr-2" />
                                            Code
                                        </a>
                                    )}
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                                        >
                                            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                                            Live Demo
                                        </a>
                                    )}
                                    {!project.liveDemo && (
                                        <span className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed opacity-50">
                                            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                                            Live Demo
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
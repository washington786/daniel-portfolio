import { useState } from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
    R1, R2, R3, R4, R5, R6, R7, R8, R9, R10,
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
    s1, s2, s3, s4, s5
} from "../components";

type Project = {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    liveDemo?: string;
    images: string[];
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects: Project[] = [
        {
            title: "Resellit Mobile Application",
            description: "Full-featured Mobile Application",
            tags: ["Expo", "TypeScript", "React Native", "RN Paper", "Express API", "Vercel"],
            github: "https://github.com/washington786/ReSellIt.git",
            liveDemo: "#",
            images: [
                R1, R2, R3, R4, R5, R6, R7, R8, R9, R10,
            ]
        },
        {
            title: "SnapBuy Mobile Application",
            description: "Online Store Mobile Application, with cart, search and payment features enabling users to make products purchase.",
            tags: ["Expo", "TypeScript", "React Native", "RN Paper", "Express API", "Vercel", "MongoDB", "React Query", "Stripe", "Redux tool-kit"],
            github: "https://github.com/washington786/SnapBuy.git",
            images: [
                s1, s2, s3, s4, s5
            ]
        },
        {
            title: "Chordly Mobile Application",
            description: "Online Music Player Application, with features that enable user to upload their songs and listen to other people's songs like sportify.",
            tags: ["Expo", "TypeScript", "React Native", "RN Paper", "Express API", "Vercel", "MongoDB", "React Query", "Redux tool-kit"],
            github: "https://github.com/washington786/chordly.git",
            images: [
                c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
            ]
        }
    ];

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex(prev =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex(prev =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
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
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div
                                className="h-48 overflow-hidden cursor-pointer"
                                onClick={() => openModal(project)}
                            >
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                                        >
                                            <CodeBracketIcon className="w-5 h-5 mr-2" />
                                            Code
                                        </a>
                                    )}
                                    <button
                                        onClick={() => openModal(project)}
                                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                                    >
                                        <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                                        View Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Gallery Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white hover:text-indigo-300 transition"
                    >
                        <XMarkIcon className="w-8 h-8" />
                    </button>

                    <div className="max-w-4xl w-full">
                        <div className="relative">
                            <img
                                src={selectedProject.images[currentImageIndex]}
                                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                className="w-full max-h-[80vh] object-contain rounded-lg"
                            />

                            {selectedProject.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="flex justify-center mt-4 space-x-2">
                            {selectedProject.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-indigo-500' : 'bg-gray-500'}`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div className="text-center mt-4 text-white">
                            <p className="text-xl font-medium">{selectedProject.title}</p>
                            <p className="text-gray-300">{currentImageIndex + 1} of {selectedProject.images.length}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
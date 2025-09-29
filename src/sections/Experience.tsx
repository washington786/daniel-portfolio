import { motion } from "framer-motion";

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string[];
}

const Experience = () => {
    const experiences: ExperienceItem[] = [
        {
            role: "IT Application Development Engineer",
            company: "Huawei Technologies",
            period: "03/2024 - 02/2025 (End of Contract)",
            description: [
                "Developed and maintained backend services using C# and ASP.NET Web API, implementing RESTful endpoints for enterprise applications.",
                "Utilized Entity Framework for database operations with SQL Server, ensuring efficient data access and integrity.",
                "Designed UI and developed Frontend applications using Vue.js and Vuex for state management.",
                "Applied Tailwind CSS & CSS for UI and performed Mobile App Testing.",
                "Integrated Frontend and Backend using fetch API and handled Asynchronous operations.",
                "Implemented automation systems using Python and Selenium.",
                "Built and Integrated REST APIs and automation workflows; contributed to research and prototyping of Spring Boot-based microservices."
            ],
        },
        {
            role: "Junior Fullstack Developer",
            company: "Foneworx",
            period: "02/2024 (Resigned)",
            description: [
                "Developed and maintained full-stack applications using Node.js and Express.js for backend APIs.",
                "Built and Optimized Mobile Applications with React Native, using libraries like React Native Elements, Paper, and Expo.",
                "Designed responsive web applications using React.js; incorporated Ant Design, Material UI, Tailwind CSS.",
                "Managed State using Redux, Context API, React Hooks, implemented performance optimization techniques for smoother user-experience.",
                "Wrote Modular, reusable components and collaborated with cross-functional teams to deliver stable, scalable features."
            ],
        },
        {
            role: "Full-Stack Developer",
            company: "MLAB",
            period: "03/2022 - End of Contract",
            description: [
                "Developed mobile applications using React Native and web applications using React.js, focusing on modular components and responsive UI.",
                "Configured and optimized builds using Webpack; used Docker to containerize applications for consistent development and testing environments.",
                "Created wireframes, mock-ups, and prototypes based on user research and functional requirements.",
                "Worked closely with designers and backend developers to implement new features and resolve integration issues."
            ],
        },
        {
            role: "Computer Science Student Assistant",
            company: "Tshwane University of Technology",
            period: "02/2021 - 03/2022 (End of Contract)",
            description: [
                "Assisted students with practical assignments in HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.",
                "Provided support for Java Programming, including OOP concepts, control structures, and debugging.",
                "Guided in designing and modelling UML diagrams.",
                "Helped configure basic network environments and troubleshoot connectivity issues.",
                "Collaborated with faculty to identify struggling learners and provided targeted mentorship."
            ],
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900"
                >
                    Work Experience
                </motion.h2>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className={`mb-8 flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full z-10"></div>

                            {/* Content Box */}
                            <div className={`md:w-1/2 px-4 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                                <div className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-100">
                                    <h3 className="text-xl font-bold text-indigo-600">{exp.role}</h3>
                                    <p className="text-gray-500 mb-3">{exp.company} · {exp.period}</p>
                                    <ul className="space-y-2 text-gray-600">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 mt-1 text-indigo-600">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
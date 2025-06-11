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
            period: "2024 - 2025",
            description: [
                "Designed and developed applications using vue js",
                "Designed and developed systems for data handling automations using python & selenium",
                "Developed PWAs and mobile applications and published on huawei gallery",
            ],
        },
        {
            role: "Fullstack Developer",
            company: "Mlab",
            period: "2021 - 2022",
            description: [
                "Built responsive UIs with React and React Native, Typescript",
                "Optimized performance, reducing load time by 40%",
                "Collaborated with UX designers to improve usability",
                "Managed a team of 5"
            ],
        },
        {
            role: "Junior Developer",
            company: "Foneworx|Cognition Pty LTD",
            period: "2022 - 2024",
            description: [
                "Designed interfaces for client and admin platforms",
                "Designed prototypes using Figma",
                "Built Mobile Applications Using React Native(Expo) typescript",
                "Delivered APKs to product Managers for testing"
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
                    Experience
                </motion.h2>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-indigo-200"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className={`mb-8 flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                            <div className="md:w-1/2 px-4">
                                <div className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-100">
                                    <h3 className="text-xl font-bold text-indigo-600">{exp.role}</h3>
                                    <p className="text-gray-500 mb-3">{exp.company} · {exp.period}</p>
                                    <ul className="space-y-2 text-gray-600">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 mt-1">•</span>
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
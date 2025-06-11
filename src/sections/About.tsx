import { motion } from "framer-motion";
import { AcademicCapIcon, TrophyIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const About = () => {
    const skills = [
        { name: "React Js|React Native(Expo)", level: 95 },
        { name: "Framer Motion|Redux|Redux tool-kit|context API", level: 95 },
        { name: "EAS|Git Version Control|git CI/CD", level: 95 },
        { name: "Jira|Trello", level: 95 },
        { name: "Postman API testing", level: 95 },
        { name: "MongoDB|MySql|PLSQL|NoSQl|SQlit", level: 95 },
        { name: "Axios|Javascript Promises", level: 95 },
        { name: "TypeScript|Javascript", level: 90 },
        { name: "Node Js|Express Js|NPM|Yarn|Nest JS", level: 85 },
        { name: "Lottie|Firebase|Tailwind Css|Figma", level: 80 },
    ];

    const certificates = [
        {
            title: "Data Analyst Certificate",
            issuer: "Huawei Technologies",
            year: "2024",
            icon: <AcademicCapIcon className="w-6 h-6 text-indigo-600" />
        },
        {
            title: "Javascript Unit Testing",
            issuer: "Coding With Mosh",
            year: "2025",
            icon: <TrophyIcon className="w-6 h-6 text-indigo-600" />
        },
        {
            title: "Advanced React Patterns",
            issuer: "Coding With Mosh",
            year: "2025",
            icon: <BookOpenIcon className="w-6 h-6 text-indigo-600" />
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Who I Am</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            I'm a <strong>Full-Stack Developer</strong> with over 4 years of experience building scalable, high-performance web and mobile applications. I specialize in creating efficient, user-friendly solutions using modern technologies, with a strong focus on the MERN stack and cross-platform mobile development using React Native with Expo.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            I continuously enhance my skills by attending online courses and staying up to date with industry trends. I'm also passionate about mentoring junior developers and helping them grow in their technical careers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">My Skills</h3>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <ul className="flex justify-between mb-2">
                                        <li className="font-medium text-gray-700">{index + 1}.{skill.name}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Certificates Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-indigo-50 rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{cert.title}</h4>
                                        <p className="text-sm text-gray-600">{cert.issuer}</p>
                                    </div>
                                </div>
                                <div className="text-sm text-indigo-600 font-medium">
                                    Earned: {cert.year}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
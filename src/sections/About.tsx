import { motion } from "framer-motion";
import { AcademicCapIcon, TrophyIcon, CodeBracketIcon, ServerIcon, DevicePhoneMobileIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const About = () => {
    const frontendSkills = [
        { name: "React.js", level: 90 },
        { name: "React Native (Expo)", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Material UI / Ant Design", level: 80 },
        { name: "Framer Motion", level: 80 },
    ];

    const backendSkills = [
        { name: "C#", level: 85 },
        { name: "ASP.NET Core", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "Nest.js", level: 75 },
        { name: "Entity Framework Core", level: 80 },
    ];

    const databasesSkills = [
        { name: "SQL Server", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
    ];

    const toolsAndDevOpsSkills = [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker", level: 85 },
        { name: "Docker Compose", level: 80 },
        { name: "Vercel", level: 80 },
        { name: "Render", level: 75 },
        { name: "Postman", level: 85 },
        { name: "Swagger", level: 80 },
        { name: "Stripe API", level: 80 },
        { name: "Ngrx State", level: 80 },
        { name: "Redux / Context API", level: 85 },
    ];

    const certificates = [
        {
            title: "Data Analyst Certificate",
            issuer: "Huawei Technologies",
            year: "2024",
            icon: <AcademicCapIcon className="w-6 h-6 text-indigo-600" />
        },
        {
            title: "Native Application Developer React Native",
            issuer: "Academind academy",
            year: "2022",
            icon: <DevicePhoneMobileIcon className="w-6 h-6 text-indigo-600" />
        },
        {
            title: "C# & DotNet",
            issuer: "Udemy",
            year: "2024",
            icon: <ServerIcon className="w-6 h-6 text-indigo-600" />
        },
        {
            title: "Node JS & Express JS",
            issuer: "Academind academy",
            year: "2023",
            icon: <ServerIcon className="w-6 h-6 text-indigo-600" />
        },
        {
            title: "JavaScript Unit Testing",
            issuer: "Coding with Mosh",
            year: "2025",
            icon: <TrophyIcon className="w-6 h-6 text-indigo-600" />
        },
    ];

    // Helper function to render a skill category section
    const renderSkillCategory = (title: string, skills: { name: string; level: number }[], icon: React.ReactNode) => (
        <div className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                    {icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
            </div>
            <div className="space-y-3">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">

                            <span className="font-medium text-gray-700">- {skill.name}</span>

                            {/* <span className="text-sm text-gray-500">{skill.level}%</span> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900"
                >
                    About Me
                </motion.h2>

                {/* Personal Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-2xl shadow-lg mb-16 border border-gray-200"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Who I Am</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">

                        Versatile and detail-oriented software developer with 3+ years of experience building scalable web, mobile, and cloud based applications using modern JavaScript frameworks, React Native, and C#/.Net ecosystems. Proficient in Rest API development with ASP.Net, SQL/NoSQL databases, and DevOps practices. Experienced in integrating frontend and backend systems with strong debugging, testing, and performance optimization skills. Passionate about delivering clean, maintainable code in agile, cross-functional teams.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        I have hands-on experience in full-stack development, from designing responsive web interfaces with React and Angular to building robust backend services with ASP.NET Core and Node.js. I'm skilled in containerization using Docker and deploying applications on platforms like Vercel and Render. I continuously enhance my skills by attending online courses and staying up to date with industry trends.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {renderSkillCategory("Frontend", frontendSkills, <GlobeAltIcon className="w-6 h-6 text-indigo-600" />)}
                    {renderSkillCategory("Backend", backendSkills, <ServerIcon className="w-6 h-6 text-indigo-600" />)}
                    {renderSkillCategory("Databases", databasesSkills, <AcademicCapIcon className="w-6 h-6 text-indigo-600" />)}
                    {renderSkillCategory("Tools & DevOps", toolsAndDevOpsSkills, <CodeBracketIcon className="w-6 h-6 text-indigo-600" />)}
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-indigo-50 rounded-2xl p-8"
                >
                    <h3 className="text-3xl font-semibold mb-6 text-gray-900 text-center">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
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
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Daniel Mawasha</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto"
                >
                    I build <span className="font-semibold text-indigo-600">scalable, high-quality</span> web and mobile applications using modern tech stacks, adhering to each phase of the Software Development Life Cycle (SDLC) — from planning and design to development, testing, deployment, and maintenance.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-indigo-400/20 transition-all"
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-all"
                    >
                        Contact Me
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
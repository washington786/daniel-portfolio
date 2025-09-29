import { EnvelopeIcon, PhoneIcon, AcademicCapIcon } from "@heroicons/react/24/solid"; // Added AcademicCapIcon for LinkedIn
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900"
                >
                    Get In Touch
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900">Let's Connect</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {/* Updated message */}
                            I'm actively seeking new opportunities to leverage my skills in full-stack development. Feel free to reach out via email or phone, or connect with me on LinkedIn. I'd be happy to discuss potential projects or opportunities.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-indigo-100 rounded-lg">
                                    <EnvelopeIcon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <span className="text-gray-700 font-medium">dkmawasha@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-indigo-100 rounded-lg">
                                    <PhoneIcon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <span className="text-gray-700 font-medium">+27 (81) 276-7830</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-indigo-100 rounded-lg">
                                    <AcademicCapIcon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/daniel-mawasha-05305a226"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 font-medium hover:underline"
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
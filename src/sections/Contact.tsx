import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900"
                >
                    Let's Talk
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
                        <p className="text-gray-600">
                            Have a project in mind? Reach out—I’d love to hear about it!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <EnvelopeIcon className="w-6 h-6 text-indigo-600" />
                                <span className="text-gray-700">dkmawasha@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <PhoneIcon className="w-6 h-6 text-indigo-600" />
                                <span className="text-gray-700">+27 (81) 276-7830</span>
                            </div>
                        </div>
                    </motion.div>
                    {/* <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-indigo-400/20 transition-all"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </motion.form> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
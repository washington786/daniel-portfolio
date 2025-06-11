import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { HomeIcon, UserIcon, CodeBracketIcon, BriefcaseIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import type { NavItem } from "../types/types";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isOpen && !target.closest(".sidebar")) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "experience", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems: NavItem[] = [
        { id: "home", icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
        { id: "about", icon: <UserIcon className="w-5 h-5" />, label: "About" },
        { id: "projects", icon: <CodeBracketIcon className="w-5 h-5" />, label: "Projects" },
        { id: "experience", icon: <BriefcaseIcon className="w-5 h-5" />, label: "Experience" },
        { id: "contact", icon: <EnvelopeIcon className="w-5 h-5" />, label: "Contact" },
    ];

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm md:hidden"
            >
                <Bars3Icon className="w-6 h-6 text-gray-900" />
            </button>

            {/* Sidebar */}
            <motion.div
                initial={{ x: -300 }}
                animate={{ x: isOpen ? 0 : -300 }}
                transition={{ type: "spring", damping: 25 }}
                className={`sidebar fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 p-4 flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0`}
            >
                {/* Close Button (Mobile) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="self-end p-2 md:hidden"
                >
                    <XMarkIcon className="w-6 h-6 text-gray-900" />
                </button>

                {/* Logo */}
                <div className="mb-8 px-2">
                    <h1 className="text-xl font-bold text-indigo-600">
                        DevPortfolio
                    </h1>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1">
                    <ul className="space-y-4">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center p-3 rounded-lg transition ${activeSection === item.id
                                        ? "bg-indigo-100 text-indigo-600"
                                        : "hover:bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </>
    );
};

export default Sidebar;
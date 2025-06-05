import React, { useState } from 'react';

const Navigation = ({ activeSection, scrollToSection }) => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-cyan-500/30">
            <div className="container mx-auto px-4 py-4">
                {/* Mobile menu button */}
                <div className="md:hidden flex justify-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/30"
                    >
                        Menu {menuOpen ? '▲' : '▼'}
                    </button>
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex justify-center flex-wrap gap-2">
                    {sections.map((section) => (
                        <li key={section}>
                            <button
                                onClick={() => scrollToSection(section)}
                                className={`px-3 py-2 rounded-full transition-all duration-300 ${
                                    activeSection === section
                                        ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-lg shadow-pink-500/50'
                                        : 'text-cyan-300 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu dropdown */}
                {menuOpen && (
                    <ul className="md:hidden flex flex-col items-center gap-2 mt-2">
                        {sections.map((section) => (
                            <li key={section} className="w-full">
                                <button
                                    onClick={() => {
                                        scrollToSection(section);
                                        setMenuOpen(false);
                                    }}
                                    className={`w-full px-3 py-2 rounded-full transition-all duration-300 ${
                                        activeSection === section
                                            ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-lg shadow-pink-500/50'
                                            : 'text-cyan-300 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navigation;

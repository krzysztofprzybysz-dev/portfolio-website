import React from 'react';

const Navigation = ({ activeSection, scrollToSection }) => {
    const sections = ['home', 'o-mnie', 'umiejętności', 'projekty', 'doświadczenie', 'edukacja', 'kontakt'];

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-cyan-500/30">
            <div className="container mx-auto px-6 py-4">
                <ul className="flex justify-center space-x-8">
                    {sections.map((section) => (
                        <li key={section}>
                            <button
                                onClick={() => scrollToSection(section)}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${
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
            </div>
        </nav>
    );
};

export default Navigation;
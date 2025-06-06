import React, { forwardRef } from 'react';
import { skills } from '../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const Skills = forwardRef((props, ref) => {
    // Funkcja mapująca poziom procentowy na tekstowy opis
    const getLevelDescription = (level) => {
        if (level >= 90) return "Ekspert";
        if (level >= 80) return "Zaawansowany";
        if (level >= 70) return "Średniozaawansowany";
        if (level >= 50) return "Podstawowy";
        return "Początkujący";
    };

    return (
        <section ref={ref} id="skills" className="py-12 px-6 vaporwave-section">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold text-center mb-12 relative inline-block w-full scroll-animate animate-up">
          <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
            [ Skills ]
          </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-cyan-500/30 glitch-header-2">
            [ Skills ]
          </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {skills.map((skill, index) => {
                        const Icon = LucideIcons[skill.icon];
                        return (
                            <div
                                key={skill.name}
                                className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-purple-500/30 scroll-animate animate-left flex flex-col items-center text-center hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="mb-4 bg-gradient-to-r from-pink-500/30 to-cyan-500/30 p-5 rounded-full">
                                    {Icon && <Icon className="text-cyan-300 w-12 h-12" />}
                                </div>
                                <h3 className="text-xl font-mono text-cyan-300 mb-2">{skill.name}</h3>
                                <span className="text-pink-400 text-sm font-medium">{getLevelDescription(skill.level)}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
});

Skills.displayName = 'Skills';

export default Skills;

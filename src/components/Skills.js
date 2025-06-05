import React, { forwardRef } from 'react';
import { skills } from '../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const Skills = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="umiejętności" className="min-h-screen py-20 px-6 vaporwave-section">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold text-center mb-16 relative inline-block w-full scroll-animate animate-up">
          <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
            [ Umiejętności ]
          </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-cyan-500/30 glitch-header-2">
            [ Umiejętności ]
          </span>
                </h2>
                <div className="space-y-6">
                    {skills.map((skill, index) => {
                        const Icon = LucideIcons[skill.icon];
                        return (
                            <div
                                key={skill.name}
                                className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-purple-500/30 scroll-animate animate-left"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex justify-between mb-2 items-center">
                                    <div className="flex items-center gap-2">
                                        {Icon && <Icon className="text-cyan-300 w-5 h-5" />}
                                        <span className="text-lg font-mono text-cyan-300">{skill.name}</span>
                                    </div>
                                    <span className="text-pink-400">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-black/50 rounded-full h-4 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out skill-bar"
                                        style={{
                                            width: `${skill.level}%`,
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    ></div>
                                </div>
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

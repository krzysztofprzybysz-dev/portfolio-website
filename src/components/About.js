import React, { forwardRef } from 'react';
import { Coffee, Network, Webhook, Puzzle, Lightbulb, Users, Rocket, BookOpen } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const About = forwardRef((props, ref) => {
    const rolesList = [
        "Software Developer",
        "Product Owner",
        "Backend Developer",
        "Full-stack Developer",
        "Problem Solver",
        "Solution Builder",
        "Team Collaborator",
        "Technology Enthusiast",
        "Code Craftsman",
        "System Architect"
    ];

    return (
        <section ref={ref} id="about" className="py-12 px-6 vaporwave-section">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold text-center mb-12 relative inline-block w-full scroll-animate animate-up">
          <span className="relative z-10 bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text">
            [ About Me ]
          </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-pink-500/30 glitch-header-1">
            [ About Me ]
          </span>
                </h2>

                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 shadow-2xl shadow-pink-500/20 scroll-animate animate-up mb-12">
                    {/* Napis HI THERE! przeniesiony z powrotem do środka boxu */}
                    <div className="mb-6 text-center">
                        <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 inline-block px-8 py-2 border-b-2 border-t-2 border-cyan-500">HI THERE!</h3>
                    </div>

                    <p className="text-xl leading-relaxed mb-6 text-cyan-100 scroll-animate animate-left bg-gradient-to-r from-pink-500/10 to-cyan-500/10 p-4 rounded-lg border border-cyan-400/20">
                        I'm a versatile <TypewriterEffect phrases={rolesList} typingSpeed={80} deletingSpeed={40} pauseTime={1500} /> with solid experience who believes that the best code is the one that solves real problems for real people.
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-6"></div>

                    <p className="text-lg leading-relaxed mb-6 text-cyan-100 scroll-animate animate-right">
                        My programming journey started with curiosity, but quickly evolved into a professional career path. Over the years, I've developed skills in <strong className="text-indigo-300">backend and frontend development</strong>, <strong className="text-indigo-300">system integration</strong>, and <strong className="text-indigo-300">project ownership</strong>. I'm fascinated by the entire software lifecycle - from <strong className="text-indigo-300">requirements analysis</strong> and architecture design to <strong className="text-indigo-300">delivering high-quality solutions</strong>.
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent my-6"></div>

                    <p className="text-lg leading-relaxed mb-6 text-cyan-100 scroll-animate animate-left">
                        As someone who combines technical skills with <strong className="text-indigo-300">strong team collaboration</strong>, I love those moments when all the puzzle pieces suddenly fit together - when technical implementation perfectly aligns with business goals and user needs. My experience as a <strong className="text-indigo-300">Product Owner/Developer</strong> gives me a unique perspective that bridges business vision and technical execution, allowing me to build solutions that truly matter.
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-6"></div>

                    <p className="text-lg leading-relaxed mb-6 text-cyan-100 scroll-animate animate-right">
                        I'm a strong advocate for <strong className="text-indigo-300">continuous learning</strong> - technology evolves so rapidly that every day is an opportunity to learn something new. Currently, I'm deepening my knowledge in software architecture and cloud technologies, because I believe the future belongs to <strong className="text-indigo-300">scalable, efficient systems</strong>.
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent my-6"></div>

                    <p className="text-lg leading-relaxed text-cyan-100 scroll-animate animate-left text-center">
                        I'm looking for opportunities where I can leverage my versatility and passion for building innovative technological solutions that make a real impact.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                        <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-4 rounded-lg text-center scroll-animate animate-up flex flex-col items-center justify-center h-32">
                            <div className="flex items-center justify-center w-full">
                                <Coffee className="w-10 h-10 text-pink-400" />
                            </div>
                            <p className="text-sm mt-3 font-medium">Java & Fullstack Craft</p>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-lg text-center scroll-animate animate-up flex flex-col items-center justify-center h-32">
                            <div className="flex items-center justify-center w-full">
                                <Network className="w-10 h-10 text-cyan-400" />
                            </div>
                            <p className="text-sm mt-3 font-medium">Scalable Architectures</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-lg text-center scroll-animate animate-up flex flex-col items-center justify-center h-32">
                            <div className="flex items-center justify-center w-full">
                                <Webhook className="w-10 h-10 text-purple-400" />
                            </div>
                            <p className="text-sm mt-3 font-medium">API Design & Integration</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-lg text-center scroll-animate animate-up flex flex-col items-center justify-center h-32">
                            <div className="flex items-center justify-center w-full">
                                <Puzzle className="w-10 h-10 text-blue-400" />
                            </div>
                            <p className="text-sm mt-3 font-medium">Solution-Driven Development</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-4 rounded-lg text-center scroll-animate animate-up flex flex-col items-center justify-center h-32">
                            <div className="flex items-center justify-center w-full">
                                <Lightbulb className="w-10 h-10 text-green-400" />
                            </div>
                            <p className="text-sm mt-3 font-medium">Problem Solver</p>
                        </div>
                        <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-4 rounded-lg text-center scroll-animate animate-up flex flex-col items-center justify-center h-32">
                            <div className="flex items-center justify-center w-full">
                                <Users className="w-10 h-10 text-red-400" />
                            </div>
                            <p className="text-sm mt-3 font-medium">Collaborative Spirit</p>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 p-4 rounded-lg text-center scroll-animate animate-up flex flex-col items-center justify-center h-32">
                            <div className="flex items-center justify-center w-full">
                                <Rocket className="w-10 h-10 text-yellow-400" />
                            </div>
                            <p className="text-sm mt-3 font-medium">Proactive Initiative</p>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-4 rounded-lg text-center scroll-animate animate-up flex flex-col items-center justify-center h-32">
                            <div className="flex items-center justify-center w-full">
                                <BookOpen className="w-10 h-10 text-indigo-400" />
                            </div>
                            <p className="text-sm mt-3 font-medium">Continuous Growth</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About;

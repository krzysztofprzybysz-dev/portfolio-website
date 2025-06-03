import React, { forwardRef } from 'react';
import { projects } from '../data/portfolioData';

const Projects = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="projekty" className="min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-5xl font-bold text-center mb-16 relative inline-block w-full">
          <span className="relative z-10 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            [ Projekty ]
          </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-purple-500/30 glitch-header-1">
            [ Projekty ]
          </span>
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-pink-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-cyan-300">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex space-x-4">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                                >
                                    Demo
                                </a>
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                                >
                                    Kod
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';

export default Projects;
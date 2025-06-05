import React, { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="experience" className="py-12 px-6 vaporwave-section">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold text-center mb-12 relative inline-block w-full scroll-animate animate-up">
          <span className="relative z-10 bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            [ Experience ]
          </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-pink-500/30 glitch-header-2">
            [ Experience ]
          </span>
                </h2>
                <div className="space-y-8 mb-12">
                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border-l-4 border-pink-500 hover:border-cyan-500 transition-all duration-300 scroll-animate animate-left">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-cyan-300">Senior Front-end Developer</h3>
                                <p className="text-purple-300">Company XYZ</p>
                            </div>
                            <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300">2023 - Present</span>
                        </div>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Development of web applications using React</li>
                            <li>• Implementation of animations and interactions</li>
                            <li>• Performance optimization</li>
                        </ul>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border-l-4 border-cyan-500 scroll-animate animate-right">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-pink-300">Front-end Developer</h3>
                                <p className="text-cyan-300">Company ABC</p>
                            </div>
                            <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300">2020 - 2023</span>
                        </div>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Creating responsive interfaces</li>
                            <li>• Collaboration with UX designers</li>
                            <li>• API integration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
});

Experience.displayName = 'Experience';

export default Experience;
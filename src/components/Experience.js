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
                                <p className="text-purple-300">TechInnovate Solutions</p>
                            </div>
                            <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300">2023 - Present</span>
                        </div>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Led development of a high-traffic e-commerce platform using React, Redux, and Next.js</li>
                            <li>• Implemented advanced animations and interactive UI components that improved user engagement by 45%</li>
                            <li>• Optimized website performance, achieving a 30% reduction in load time and 90+ PageSpeed score</li>
                            <li>• Mentored junior developers and conducted code reviews to maintain code quality standards</li>
                            <li>• Collaborated with UX/UI designers to implement pixel-perfect interfaces and responsive designs</li>
                        </ul>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border-l-4 border-cyan-500 scroll-animate animate-right">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-pink-300">Front-end Developer</h3>
                                <p className="text-cyan-300">Digital Creatives Agency</p>
                            </div>
                            <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300">2020 - 2023</span>
                        </div>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Developed responsive web applications using React, TypeScript, and Tailwind CSS</li>
                            <li>• Created and maintained component libraries that improved development efficiency by 35%</li>
                            <li>• Integrated RESTful APIs and GraphQL endpoints for seamless data management</li>
                            <li>• Worked in Agile teams to deliver projects for clients across various industries</li>
                            <li>• Implemented automated testing with Jest and React Testing Library</li>
                        </ul>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border-l-4 border-purple-500 scroll-animate animate-left">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-cyan-300">Junior Web Developer</h3>
                                <p className="text-purple-300">WebSphere Studios</p>
                            </div>
                            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300">2018 - 2020</span>
                        </div>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Built and maintained client websites using JavaScript, HTML5, and CSS3</li>
                            <li>• Assisted in migrating legacy applications to modern frameworks like React</li>
                            <li>• Participated in daily stand-ups and sprint planning meetings</li>
                            <li>• Collaborated with back-end developers to integrate front-end components with API endpoints</li>
                            <li>• Gained experience in version control using Git and project management tools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
});

Experience.displayName = 'Experience';

export default Experience;
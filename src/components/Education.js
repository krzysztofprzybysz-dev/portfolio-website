import React, { forwardRef } from 'react';

const Education = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="education" className="py-12 px-6 vaporwave-section">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold text-center mb-12 relative inline-block w-full scroll-animate animate-up">
          <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            [ Education ]
          </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-cyan-500/30 glitch-header-1">
            [ Education ]
          </span>
                </h2>

                <div className="space-y-8 mb-12">
                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border-l-4 border-purple-500 scroll-animate animate-left">
                        <h3 className="text-2xl font-bold text-pink-300 mb-2">Master's in Computer Science</h3>
                        <p className="text-cyan-300 mb-2">Technical University of Excellence</p>
                        <p className="text-purple-300 mb-4">2020 - 2022</p>
                        <div className="mt-4 p-4 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-lg">
                            <p className="text-gray-300 mb-2">Specialization: Advanced Web Technologies & AI Integration</p>
                            <ul className="space-y-1 text-gray-300">
                                <li>• Thesis: "Optimization Techniques for Modern JavaScript Frameworks"</li>
                                <li>• GPA: 3.92/4.0</li>
                                <li>• Participated in International Web Development Competition (2nd place)</li>
                                <li>• Research assistant in Human-Computer Interaction lab</li>
                            </ul>
                        </div>
                        <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg">
                            <p className="text-gray-300">Key courses: Advanced Algorithm Design, Cloud Computing Architecture, Machine Learning for Web Applications, User Experience Research Methods</p>
                        </div>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border-l-4 border-cyan-500 scroll-animate animate-right">
                        <h3 className="text-2xl font-bold text-pink-300 mb-2">Bachelor's in Computer Science</h3>
                        <p className="text-cyan-300 mb-2">National University of Technology</p>
                        <p className="text-purple-300 mb-4">2016 - 2020</p>
                        <div className="mt-4 p-4 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-lg">
                            <p className="text-gray-300 mb-2">Specialization: Web Systems and Mobile Applications</p>
                            <ul className="space-y-1 text-gray-300">
                                <li>• Final Project: "Responsive E-commerce Platform with React and Node.js"</li>
                                <li>• GPA: 3.85/4.0</li>
                                <li>• Dean's List: 7 consecutive semesters</li>
                                <li>• Member of Web Development Student Society</li>
                            </ul>
                        </div>
                        <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg">
                            <p className="text-gray-300">Key courses: Data Structures & Algorithms, Web Programming, Database Systems, UI/UX Design Fundamentals</p>
                        </div>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border-l-4 border-pink-500 scroll-animate animate-left">
                        <h3 className="text-2xl font-bold text-cyan-300 mb-2">Professional Certification</h3>
                        <p className="text-pink-300 mb-2">Advanced Front-end Development</p>
                        <p className="text-purple-300 mb-4">2019</p>
                        <div className="mt-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg">
                            <p className="text-gray-300 mb-2">Tech Academy International</p>
                            <ul className="space-y-1 text-gray-300">
                                <li>• Specialized in React ecosystem and modern JavaScript</li>
                                <li>• Completed 5 real-world projects with industry mentors</li>
                                <li>• Received Excellence Award for final capstone project</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Education.displayName = 'Education';

export default Education;
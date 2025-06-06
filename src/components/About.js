import React, { forwardRef } from 'react';
import { Coffee, Network, Webhook, Puzzle, Lightbulb, Users, Rocket, BookOpen } from 'lucide-react';

const About = forwardRef((props, ref) => {
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
                    <p className="text-lg leading-relaxed mb-4 text-cyan-100 scroll-animate animate-left">
                        I am a motivated and <strong className="text-indigo-300">versatile Software Developer</strong> with solid experience. My work includes hands-on <strong className="text-indigo-300">backend and frontend development</strong>, <strong className="text-indigo-300">system integration</strong>, and <strong className="text-indigo-300">project ownership</strong>. I bring a strong background in <strong className="text-indigo-300">requirements analysis</strong> and <strong className="text-indigo-300">team leadership</strong>, consistently <strong className="text-indigo-300">delivering high-quality software solutions</strong>. I'm passionate about technology, <strong className="text-indigo-300">continuous learning</strong>, and building effective, <strong className="text-indigo-300">scalable systems</strong>.
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-6"></div>

                    <p className="text-lg leading-relaxed mb-4 text-cyan-100 scroll-animate animate-right">
                        My journey as a <strong className="text-indigo-300">Product Owner/Developer</strong> offers a <strong className="text-indigo-300">unique perspective</strong>, effectively <strong className="text-indigo-300">bridging business vision and technical execution</strong>. This role has honed my ability to deeply <strong className="text-indigo-300">understand user needs</strong> and translate them into <strong className="text-indigo-300">robust, efficient software</strong>. I'm eager to apply this skill more directly in a <strong className="text-indigo-300">dedicated development role</strong>. I am now seeking a focused <strong className="text-indigo-300">Backend Java Developer or Fullstack Developer position</strong>. My goal is to leverage my comprehensive understanding of the <strong className="text-indigo-300">software lifecycle</strong> and my <strong className="text-indigo-300">passion for coding</strong> to build <strong className="text-indigo-300">innovative and impactful technological solutions</strong>.
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent my-6"></div>

                    <p className="text-lg leading-relaxed mb-4 text-cyan-100 scroll-animate animate-left">
                        Looking forward, I want to grow my skills in <strong className="text-indigo-300">solid software architecture</strong> and <strong className="text-indigo-300">current industry best practices</strong>. I'm also very interested in <strong className="text-indigo-300">cloud technologies</strong> and using <strong className="text-indigo-300">automation</strong> more. This will help create systems that are even more <strong className="text-indigo-300">reliable, scalable, and efficient</strong>. I believe that always learning in these key areas will let me make a real impact on <strong className="text-indigo-300">innovative projects</strong> and help drive technological progress.
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
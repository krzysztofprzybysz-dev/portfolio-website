import React, { forwardRef } from 'react';
import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';

const Home = forwardRef((props, ref) => {
    const glitchText = 'Krzysztof Przybysz';

    return (
        <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative vaporwave-section">
            <div className="text-center z-10">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 relative inline-block scroll-animate animate-up">
          <span className="relative z-10 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            {glitchText}
          </span>
                    <span className="absolute inset-0 text-pink-500 opacity-50 glitch-1">
            {glitchText}
          </span>
                    <span className="absolute inset-0 text-cyan-500 opacity-50 glitch-2">
            {glitchText}
          </span>
                </h1>
                <p className="text-2xl md:text-3xl text-cyan-300 mb-8 font-mono scroll-animate animate-right">
                    Front-end Developer | Designer | Creator
                </p>
                <div className="flex justify-center space-x-4 mb-12 scroll-animate animate-up">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-pink-500/20 rounded-full hover:bg-pink-500/40 transition-all duration-300 hover:scale-110"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cyan-500/20 rounded-full hover:bg-cyan-500/40 transition-all duration-300 hover:scale-110"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:hello@example.com"
                        className="p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/40 transition-all duration-300 hover:scale-110"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
                <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-cyan-400 scroll-animate animate-up" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
        </section>
    );
});

Home.displayName = 'Home';

export default Home;
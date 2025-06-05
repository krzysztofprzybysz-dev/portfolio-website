import React, { forwardRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="kontakt" className="py-12 px-6 vaporwave-section">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold text-center mb-12 relative inline-block w-full scroll-animate animate-up">
          <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            [ Kontakt ]
          </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-purple-500/30 glitch-header-2">
            [ Kontakt ]
          </span>
                </h2>
                <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30 text-center mb-12">
                    <p className="text-xl mb-8 text-cyan-300 scroll-animate animate-right">Chętnie nawiążę współpracę!</p>
                    <div className="space-y-4">
                        <a
                            href="mailto:hello@example.com"
                            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 scroll-animate animate-up"
                        >
                            <Mail className="w-5 h-5" />
                            <span>hello@example.com</span>
                        </a>
                        <div className="flex justify-center space-x-6 mt-8 scroll-animate animate-up">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-pink-500/20 rounded-full hover:bg-pink-500/40 transition-all duration-300 hover:scale-110"
                            >
                                <Github className="w-8 h-8" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-cyan-500/20 rounded-full hover:bg-cyan-500/40 transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Contact.displayName = 'Contact';

export default Contact;
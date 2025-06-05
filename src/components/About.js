import React, { forwardRef } from 'react';
import { Terminal, Palette, Code, Globe } from 'lucide-react';

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="o-mnie" className="min-h-screen py-20 px-6 vaporwave-section">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold text-center mb-16 relative inline-block w-full scroll-animate animate-up">
          <span className="relative z-10 bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text">
            [ O Mnie ]
          </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-pink-500/30 glitch-header-1">
            [ O Mnie ]
          </span>
                </h2>
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 shadow-2xl shadow-pink-500/20 scroll-animate animate-up">
                    <p className="text-lg leading-relaxed mb-6 text-cyan-100 scroll-animate animate-left">
                        Cześć! Jestem pasjonatem technologii front-end z miłością do tworzenia immersyjnych,
                        estetycznych doświadczeń cyfrowych. Specjalizuję się w łączeniu nostalgii retro z
                        nowoczesnymi technologiami webowymi.
                    </p>
                    <p className="text-lg leading-relaxed mb-6 text-cyan-100 scroll-animate animate-right">
                        Moje projekty często czerpią inspirację z estetyki vaporwave, synthwave i retrofuturyzmu,
                        tworząc unikalne interfejsy, które nie tylko dobrze wyglądają, ale są też funkcjonalne
                        i wydajne.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-4 rounded-lg text-center scroll-animate animate-up">
                            <Terminal className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                            <p className="text-sm">Clean Code</p>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-lg text-center scroll-animate animate-up">
                            <Palette className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                            <p className="text-sm">UI Design</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-lg text-center scroll-animate animate-up">
                            <Code className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                            <p className="text-sm">Development</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-lg text-center scroll-animate animate-up">
                            <Globe className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                            <p className="text-sm">Innovation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About;
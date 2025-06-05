import React, { forwardRef } from 'react';
import { Terminal, Palette, Code, Globe } from 'lucide-react';

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
                    <p className="text-lg leading-relaxed mb-6 text-cyan-100 scroll-animate animate-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat ultrices quam, eu auctor
                        lacus. Mauris lacinia tempus augue, sit amet bibendum tortor luctus sed. Suspendisse pulvinar,
                        dolor nec commodo pretium, odio neque ultricies leo, at posuere dolor quam at leo. Aliquam
                        pulvinar facilisis ipsum tempor bibendum. Donec lacus neque, rutrum at facilisis id, auctor quis
                        nunc. Etiam sollicitudin tincidunt mi. Vivamus venenatis ante tortor, ac egestas odio commodo
                        fringilla. Nulla et euismod augue. Nulla suscipit volutpat orci ut pellentesque. Cras ut rhoncus
                        ligula. Proin lectus tellus, elementum non iaculis pellentesque, convallis non justo. Curabitur
                        odio velit, auctor sit amet elementum id, imperdiet vel turpis.
                    </p>
                    <p className="text-lg leading-relaxed mb-6 text-cyan-100 scroll-animate animate-right">
                        Sed aliquam neque eget maximus viverra. Nam laoreet, sapien eu mollis fringilla, sapien lorem
                        pellentesque eros, in egestas neque mi ut justo. Nam ornare leo vitae lobortis finibus.
                        Phasellus sit amet augue quam. Pellentesque nec urna dui. Vivamus suscipit varius pharetra.
                        Fusce mattis eros sit amet odio dictum, a tempor lectus blandit. Fusce placerat elit nibh, vel
                        tristique est cursus at. In vulputate eget leo quis porttitor. Praesent dignissim ligula a leo
                        pellentesque, sed lacinia sem vestibulum.
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
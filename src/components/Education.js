import React, { forwardRef } from 'react';

const Education = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="edukacja" className="py-12 px-6 vaporwave-section">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold text-center mb-12 relative inline-block w-full scroll-animate animate-up">
          <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            [ Edukacja ]
          </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-cyan-500/30 glitch-header-1">
            [ Edukacja ]
          </span>
                </h2>
                <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 scroll-animate animate-left mb-12">
                    <h3 className="text-2xl font-bold text-pink-300 mb-2">Informatyka</h3>
                    <p className="text-cyan-300 mb-4">Politechnika Warszawska</p>
                    <p className="text-purple-300">2016 - 2020</p>
                    <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-lg">
                        <p className="text-gray-300">Specjalizacja: Systemy Webowe i Aplikacje Mobilne</p>
                    </div>
                </div>
            </div>
        </section>
    );
});

Education.displayName = 'Education';

export default Education;
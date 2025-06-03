import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const sectionRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            Object.entries(sectionRefs.current).forEach(([section, ref]) => {
                if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white overflow-x-hidden">
            {/* Grid Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 grid-background"></div>
            </div>

            <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

            <Home ref={el => sectionRefs.current['home'] = el} />
            <About ref={el => sectionRefs.current['o-mnie'] = el} />
            <Skills ref={el => sectionRefs.current['umiejętności'] = el} />
            <Projects ref={el => sectionRefs.current['projekty'] = el} />
            <Experience ref={el => sectionRefs.current['doświadczenie'] = el} />
            <Education ref={el => sectionRefs.current['edukacja'] = el} />
            <Contact ref={el => sectionRefs.current['kontakt'] = el} />

            <Footer />
        </div>
    );
};

export default App;
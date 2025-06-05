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
            // Obsługa aktywnej sekcji dla nawigacji
            const scrollPosition = window.scrollY + 100;

            Object.entries(sectionRefs.current).forEach(([section, ref]) => {
                if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
                    setActiveSection(section);
                }
            });

            // Obsługa animacji przewijania
            const isElementInViewport = (el) => {
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                const topVisible = rect.top <= windowHeight * 0.75;
                const bottomVisible = rect.bottom >= 0;
                return topVisible && bottomVisible;
            };

            // Animacje dla elementów z klasą .scroll-animate
            const animatedElements = document.querySelectorAll('.scroll-animate');
            animatedElements.forEach((el) => {
                if (isElementInViewport(el) && !el.classList.contains('animated')) {
                    if (el.classList.contains('animate-up')) {
                        el.classList.add('fade-in-up');
                    } else if (el.classList.contains('animate-left')) {
                        el.classList.add('fade-in-left');
                    } else if (el.classList.contains('animate-right')) {
                        el.classList.add('fade-in-right');
                    }
                    el.classList.add('animated');
                }
            });

            // Aktywacja efektu neonowego dla sekcji w viewport
            const sections = document.querySelectorAll('.vaporwave-section');
            sections.forEach((section) => {
                if (isElementInViewport(section)) {
                    section.classList.add('active-section');
                } else {
                    section.classList.remove('active-section');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Wywołanie na początku, aby sprawdzić elementy już widoczne
        handleScroll();

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
            <About ref={el => sectionRefs.current['about'] = el} />
            <Skills ref={el => sectionRefs.current['skills'] = el} />
            <Projects ref={el => sectionRefs.current['projects'] = el} />
            <Experience ref={el => sectionRefs.current['experience'] = el} />
            <Education ref={el => sectionRefs.current['education'] = el} />
            <Contact ref={el => sectionRefs.current['contact'] = el} />

            <Footer />
        </div>
    );
};

export default App;

import React from 'react';
import packageInfo from '../../package.json';

const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-purple-500/30 vaporwave-section">
            <p className="text-cyan-300">© 2025 Krzysztof Przybysz • Wersja: {packageInfo.version}</p>
        </footer>
    );
};

export default Footer;
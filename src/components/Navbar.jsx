import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import bedankaLogo from '../assets/navbar_logo_bedanka_group.webp';
import DevelopmentNotice from './DevelopmentNotice';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.services'), href: '/integrated-services' },
        { name: t('nav.portfolio'), href: '/portfolio' },
        { name: t('nav.contact'), href: '/contact' },
        { name: t('nav.about'), href: '/about-us' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 flex flex-col ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
            {/* <DevelopmentNotice /> */}
            <div className={`w-full transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
                <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={bedankaLogo}
                            alt="Bedanka Logo"
                            className="w-20"
                            loading="lazy"
                            decoding="async"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} to={link.href} className="text-sm font-medium hover:text-secondary transition-colors text-white/90">
                                {link.name}
                            </Link>
                        ))}

                        {/* Language Toggle */}
                        <button onClick={toggleLanguage} className="text-white text-sm font-medium hover:text-secondary transition-colors flex items-center">
                            <span className={language === 'id' ? 'font-bold text-white' : 'text-white/50'}>ID</span>
                            <span className="mx-2 text-white/30">|</span>
                            <span className={language === 'en' ? 'font-bold text-white' : 'text-white/50'}>EN</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl absolute top-full left-0 w-full overflow-hidden border-t border-white/10"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-lg font-medium text-white/90 hover:text-secondary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="w-full bg-white text-black py-3 rounded-full font-bold mt-4 hover:bg-gray-200 transition-colors block text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {t('nav.getStarted')}
                            </Link>

                            {/* Mobile Language Toggle */}
                            <div className="flex items-center justify-center space-x-4 py-4 border-t border-white/10 mt-4">
                                <span className="text-white/70 text-sm">Language:</span>
                                <button onClick={toggleLanguage} className="text-white text-lg font-medium flex items-center">
                                    <span className={language === 'id' ? 'font-bold text-white' : 'text-white/50'}>ID</span>
                                    <span className="mx-2 text-white/30">|</span>
                                    <span className={language === 'en' ? 'font-bold text-white' : 'text-white/50'}>EN</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

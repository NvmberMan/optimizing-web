import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import bedankaLogo from '../assets/navbar_logo_bedanka_group.webp';

import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-[#111] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-8 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 mb-12">

                    {/* Brand */}
                    <div className="md:col-span-5 lg:col-span-4 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link to="/">
                            <img
                                src={bedankaLogo}
                                alt="Bedanka Logo"
                                className="h-auto"
                                width={"200px"}
                                loading="lazy"
                                decoding="async"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed md:max-w-sm">
                            {t('footer.transforming')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 lg:col-span-3">
                        <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
                            <li><Link to="/integrated-services" className="hover:text-white transition-colors">{t('nav.services')}</Link></li>
                            <li><Link to="/portfolio" className="hover:text-white transition-colors">{t('nav.portfolio')}</Link></li>
                            <li><Link to="/about-us" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 lg:col-span-4">
                        <h4 className="text-lg font-bold mb-6">{t('footer.contactInfo')}</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="mt-1 flex-shrink-0" />
                                <span>{t('footer.address')}</span>
                            </li>
                            {/* <li className="flex items-center space-x-3">
                                <Phone size={18} />
                                <span>+62 811-2929-975</span>
                            </li> */}
                            <li className="flex items-center space-x-3">
                                <Mail size={18} />
                                <span>contact@bedankagroup.co.id</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
                    <p>{t('footer.allRightsReserved')}</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacyPolicy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.termsOfService')}</a>
                    </div>
                    <div className="flex space-x-4">
                        {/* <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-black transition-all">
                            <Instagram size={18} />
                        </a> */}
                        <a href="https://www.linkedin.com/company/bedanka-interubber-indonesia/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-black transition-all">
                            <Linkedin size={18} />
                        </a>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-black transition-all">
                            <Youtube size={18} />
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

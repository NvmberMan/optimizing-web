import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Instagram, Youtube, MapPin, FileText } from 'lucide-react';
import heroBackground from '../assets/connect_hero.png';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [activeLocation, setActiveLocation] = React.useState('jakarta');

    return (
        <div className="bg-white text-black">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0">
                    <img
                        src={heroBackground}
                        alt="Contact Hero"
                        className="w-full h-full object-cover object-[center_25%] opacity-50 posy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-8 md:px-12 pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-2">
                            {t('contact.heroTitle')}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-200 mb-6 font-light">{t('contact.heroSubtitle')}</h2>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                            {t('contact.heroDesc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information & Directory */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-8 md:px-12">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-purple-900 mb-2">
                            {t('contact.infoTitle')}
                        </h2>
                        <p className="text-gray-500 italic">{t('contact.infoSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* WhatsApp Card */}
                        <a
                            href="https://wa.me/6282114227789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Phone size={120} className="text-purple-900 rotate-12" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-900 group-hover:scale-110 transition-all duration-300">
                                    <Phone size={32} className="text-purple-900 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">{t('contact.whatsapp')}</h3>
                                <p className="text-xl font-bold text-gray-900 mb-1">{t('contact.whatsappAction')}</p>
                                <p className="text-sm text-purple-600 font-medium group-hover:text-purple-700">PT Bedanka Interrubber Indonesia</p>
                            </div>
                        </a>

                        {/* Email Card */}
                        <a
                            href="mailto:contact@bedankagroup.co.id"
                            className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Mail size={120} className="text-blue-900 rotate-12" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:scale-110 transition-all duration-300">
                                    <Mail size={32} className="text-blue-900 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">{t('contact.email')}</h3>
                                <p className="text-xl font-bold text-gray-900 mb-1">contact@bedankagroup.co.id</p>
                                <p className="text-sm text-blue-600 font-medium group-hover:text-blue-700">{t('contact.emailDesc')}</p>
                            </div>
                        </a>

                        {/* LinkedIn Card */}
                        <a
                            href="https://www.linkedin.com/company/bedanka-interubber-indonesia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Linkedin size={120} className="text-blue-700 rotate-12" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                                    <Linkedin size={32} className="text-blue-700 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">{t('contact.linkedin')}</h3>
                                <p className="text-xl font-bold text-gray-900 mb-1">PT Bedanka Interrubber</p>
                                <p className="text-sm text-blue-600 font-medium group-hover:text-blue-700">{t('contact.linkedinDesc')}</p>
                            </div>
                        </a>

                        {/* Google Form Card */}
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdjSwVUzFMfgFKZR0GvERI9NaCDgnHYtD1PfBi8rZx6xn8lTQ/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FileText size={120} className="text-pink-600 rotate-12" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:scale-110 transition-all duration-300">
                                    <FileText size={32} className="text-pink-600 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">{t('contact.googleFormTitle')}</h3>
                                <p className="text-xl font-bold text-gray-900 mb-1">{t('contact.googleFormSubtitle')}</p>
                                <p className="text-sm text-pink-600 font-medium group-hover:text-pink-700">{t('contact.googleFormDesc')}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-8 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-purple-900 mb-2">
                            {t('contact.locations')}
                        </h2>
                        <p className="text-gray-500 text-lg mb-4">{t('contact.locationsSubtitle')}</p>
                        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                            {t('contact.locationsDesc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Map Display */}
                        <div className="h-full bg-gray-200 rounded-xl overflow-hidden relative min-h-[400px] lg:min-h-0 shadow-lg">
                            {/* Render Map based on active location */}
                            {activeLocation === 'jakarta' && (
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7932.6192524497055!2d106.80541889069394!3d-6.222842344536422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sInfiniti%20Office%2C%20Indonesia%20Stock%20Exchange%20Building%2C%20Tower%201%20Level%203%20Suite%20304%2C%20SCBD%20Jl.%20Jend.%20Sudirman%20Kav.%2052-53%2C%20Jakarta%20Selatan%2012190!5e0!3m2!1sid!2sid!4v1770649303318!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '400px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Jakarta Office Map"
                                ></iframe>
                            )}
                            {activeLocation === 'bogor' && (
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15854.693908416615!2d106.76868214038399!3d-6.562835727662968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTaman%20Yasmin%20Jl.%20Seruni%20II%20No.%2027%20Bogor%2016810!5e0!3m2!1sid!2sid!4v1770649449954!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '400px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Bogor Office Map"
                                ></iframe>
                            )}
                            {activeLocation === 'workshop' && (
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.294737221907!2d106.74284227453126!3d-6.224814560963352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0b5dfa85a01%3A0x44fb84637ff2fa6f!2sJl.%20H.%20Kuling%20No.83%2C%20RT.7%2FRW.11%2C%20Petukangan%20Utara%2C%20Kec.%20Pesanggrahan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012260!5e0!3m2!1sid!2sid!4v1770649523319!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '400px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Workshop Map"
                                ></iframe>
                            )}
                            {activeLocation === 'balikpapan' && (
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.851961718161!2d116.82945087448284!3d-1.2610694355980556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1470f8aec4589%3A0x3b140d4a516750ee!2sJl.%20RE%20Martadinata%20No.6%2C%20Mekar%20Sari%2C%20Kec.%20Balikpapan%20Tengah%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur%2076112!5e0!3m2!1sid!2sid!4v1770649864019!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '400px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Balikpapan Office Map"
                                ></iframe>
                            )}
                        </div>

                        {/* Location List */}
                        <div className="space-y-4">
                            <div
                                className={`border-l-4 pl-4 cursor-pointer transition-all p-4 rounded-r-lg ${activeLocation === 'jakarta' ? 'border-purple-900 bg-purple-50' : 'border-gray-300 hover:bg-gray-50'}`}
                                onClick={() => setActiveLocation('jakarta')}
                            >
                                <h3 className={`font-bold text-lg mb-2 ${activeLocation === 'jakarta' ? 'text-purple-900' : 'text-black'}`}>Jakarta Office</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Infiniti Office, Indonesia Stock Exchange Building, Tower 1 Level 3 Suite 304, SCBD. Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190.
                                </p>
                            </div>

                            <div
                                className={`border-l-4 pl-4 cursor-pointer transition-all p-4 rounded-r-lg ${activeLocation === 'bogor' ? 'border-purple-900 bg-purple-50' : 'border-gray-300 hover:bg-gray-50'}`}
                                onClick={() => setActiveLocation('bogor')}
                            >
                                <h3 className={`font-bold text-lg mb-2 ${activeLocation === 'bogor' ? 'text-purple-900' : 'text-black'}`}>Bogor Office</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Taman Yasmin Jl. Seruni II No. 27 Bogor 16810
                                </p>
                            </div>

                            <div
                                className={`border-l-4 pl-4 cursor-pointer transition-all p-4 rounded-r-lg ${activeLocation === 'balikpapan' ? 'border-purple-900 bg-purple-50' : 'border-gray-300 hover:bg-gray-50'}`}
                                onClick={() => setActiveLocation('balikpapan')}
                            >
                                <h3 className={`font-bold text-lg mb-2 ${activeLocation === 'balikpapan' ? 'text-purple-900' : 'text-black'}`}>Balikpapan Office</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Jl. RE-Martadinata No. 06 RT.22 Balikpapan 76112.
                                </p>
                            </div>

                            <div
                                className={`border-l-4 pl-4 cursor-pointer transition-all p-4 rounded-r-lg ${activeLocation === 'workshop' ? 'border-purple-900 bg-purple-50' : 'border-gray-300 hover:bg-gray-50'}`}
                                onClick={() => setActiveLocation('workshop')}
                            >
                                <h3 className={`font-bold text-lg mb-2 ${activeLocation === 'workshop' ? 'text-purple-900' : 'text-black'}`}>Workshop</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Jl. H. Kuling No. 83 Pesanggrahan, Jakarta Selatan 12320.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

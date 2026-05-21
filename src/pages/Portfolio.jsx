import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import portfolioImg1 from '../assets/portofolios/portofolio_01.png';
import portfolioImg2 from '../assets/portofolios/portofolio_17.png';
import portfolioImg3 from '../assets/portofolios/portofolio_16.png';
import portfolioImg4 from '../assets/portofolios/portofolio_04.png';
import portfolioImg5 from '../assets/portofolios/portofolio_10.png';
import portfolioImg6 from '../assets/portofolios/portofolio_06.png';
import portfolioImg7 from '../assets/portofolios/portofolio_13.png';
import portfolioImg8 from '../assets/portofolios/portofolio_08.webp';
import portfolioImg9 from '../assets/portofolios/portofolio_09.png';

import totalLogo from '../assets/clients/total_e_p_indonesia.png';
import chevronLogo from '../assets/clients/chevron.png';
import pertaminaLogo from '../assets/clients/pertamina.png';
import vicoLogo from '../assets/clients/vico_indonesia.png';
import mubadalaLogo from '../assets/clients/mubadala_energy.png';
import eniLogo from '../assets/clients/eni.png';
import apexindoLogo from '../assets/clients/apexindo.png';
import schlumbergerLogo from '../assets/clients/schlumberger.png';
import kidecoLogo from '../assets/clients/kideco.png';
import bumaLogo from '../assets/clients/buma.png';
import toyotaLogo from '../assets/clients/toyota.png';
import daihatsuLogo from '../assets/clients/daihatsu.png';
import mitsubishiLogo from '../assets/clients/mitsubishi_motors.png';
import nissanLogo from '../assets/clients/nissan.png';
import bmwLogo from '../assets/clients/bmw.png';
import mercedesLogo from '../assets/clients/mercedes_benz.png';
import fordLogo from '../assets/clients/ford.png';
import chevroletLogo from '../assets/clients/chevrolet.png';
import jeepLogo from '../assets/clients/jeep.png';
import ducatiLogo from '../assets/clients/ducati.png';
import kawasakiLogo from '../assets/clients/kawasaki.png';
import biLogo from '../assets/clients/bank_indonesia.png';
import mandiriLogo from '../assets/clients/bank_mandiri.png';
import briLogo from '../assets/clients/bank_bri.png';
import bcaLogo from '../assets/clients/bank_bca.png';
import cimbLogo from '../assets/clients/bank_cimb_niaga.png';
import danamonLogo from '../assets/clients/bank_danamon.png';
import permataLogo from '../assets/clients/permata_bank.png';
import ojkLogo from '../assets/clients/ojk.png';
import plnLogo from '../assets/clients/pln.png';
import jasamargaLogo from '../assets/clients/jasamarga.png';
import wikaLogo from '../assets/clients/wijaya_karya.png';
import adhiLogo from '../assets/clients/adhi.png';
import telkomLogo from '../assets/clients/telkom_indonesia.png';
import telkomselLogo from '../assets/clients/telkomsel.png';
import indosatLogo from '../assets/clients/indosat_ooredoo_hutchison.png';
import xlLogo from '../assets/clients/xl_axiata.png';
import tvOneLogo from '../assets/clients/tv_one.png';
import indosiarLogo from '../assets/clients/INDOSIAR_Logo 1.png';
import sctvLogo from '../assets/clients/sctv.png';
import smartFmLogo from '../assets/clients/smart_fm.png';
import mraLogo from '../assets/clients/mra_group.png';
import jakpostLogo from '../assets/clients/the_jakarta_post.png';
import uniquipLogo from '../assets/clients/uniquip.png';
import flexindoLogo from '../assets/clients/flexindo.png';
import angkasaPuraLogo from '../assets/clients/angkasapura.png';

import portofolioHeroBg from '../assets/portofolio_hero_bg.webp';

// Marquee Component with CSS animation for pause-on-hover support
const Marquee = ({ items, direction = "left", speed = 40 }) => {
    return (
        <div className="relative flex overflow-hidden group py-8">
            {/* CSS Keyframes definition */}
            <style>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marquee-left ${speed}s linear infinite;
                }
                .animate-marquee-right {
                    animation: marquee-right ${speed}s linear infinite;
                }
            `}</style>

            <div
                className={`flex gap-16 py-4 whitespace-nowrap items-center w-max hover:[animation-play-state:paused] ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
            >
                {[...items, ...items].map((item, idx) => (
                    <div
                        key={idx}
                        className="inline-flex items-center justify-center px-4"
                    >
                        {item.logo ? (
                            <img
                                src={item.logo}
                                alt={item.name}
                                style={{
                                    transform: item.scale ? `scale(${item.scale})` : 'scale(1)',
                                    maxWidth: item.maxWidth || 'none'
                                }}
                                className={`h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 ${item.className || ''}`}
                                loading="lazy"
                                decoding="async"
                            />
                        ) : (
                            <span className="text-xl md:text-2xl font-bold uppercase text-gray-300 hover:text-black transition-colors duration-300 cursor-default select-none">
                                {item.name || item}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Gradient Masks for smooth fade out at edges - White for white background */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        </div>
    );
};

const Portfolio = () => {
    const { t } = useLanguage();
    const partnerCategories = [
        {
            category: t('portfolio.categories.oilGas'),
            partners: [
                { name: "TOTAL E&P Indonesie", logo: totalLogo },
                { name: "CHEVRON Indonesia Company", logo: chevronLogo },
                { name: "PERTAMINA EP", logo: pertaminaLogo },
                { name: "VICO Indonesia Company", logo: vicoLogo },
                { name: "MUBADALA Petroleum", logo: mubadalaLogo },
                { name: "ENI Muara Bakau B.V", logo: eniLogo },
                { name: "SCHLUMBERGER", logo: schlumbergerLogo },
                { name: "APEXINDO", logo: apexindoLogo },
                // Fallback text for missing
                { name: "SKK Migas" }, { name: "HALLIBURTON" }
            ]
        },
        {
            category: t('portfolio.categories.miningAuto'),
            partners: [
                { name: "KIDECO", logo: kidecoLogo },
                { name: "BUMA", logo: bumaLogo },
                { name: "TOYOTA", logo: toyotaLogo },
                { name: "DAIHATSU", logo: daihatsuLogo },
                { name: "MITSUBISHI", logo: mitsubishiLogo },
                { name: "NISSAN", logo: nissanLogo },
                { name: "BMW", logo: bmwLogo },
                { name: "MERCEDES-BENZ", logo: mercedesLogo },
                { name: "FORD", logo: fordLogo },
                { name: "CHEVROLET", logo: chevroletLogo },
                { name: "JEEP", logo: jeepLogo },
                { name: "DUCATI", logo: ducatiLogo },
                { name: "KAWASAKI", logo: kawasakiLogo },
                { name: "UNIQUIP", logo: uniquipLogo },
                { name: "FLEXINDO", logo: flexindoLogo },
                // Fallback text for missing
                { name: "PAMA PERSADA NUSANTARA" },
                { name: "ADARO ENERGY" },
                { name: "BUKIT ASAM" },
                { name: "ASTRA HONDA MOTOR" },
                { name: "SUZUKI INDOMOBIL" }
            ]
        },
        {
            category: t('portfolio.categories.bankingFinance'),
            partners: [
                { name: "BANK INDONESIA", logo: biLogo },
                { name: "BANK MANDIRI", logo: mandiriLogo },
                { name: "BRI", logo: briLogo },
                { name: "BCA", logo: bcaLogo },
                { name: "CIMB NIAGA", logo: cimbLogo },
                { name: "DANAMON", logo: danamonLogo },
                { name: "PERMATA", logo: permataLogo },
                // Missing BNI in assets, use text
                { name: "BNI" }
            ]
        },
        {
            category: t('portfolio.categories.govtBumn'),
            partners: [
                { name: "OJK", logo: ojkLogo },
                { name: "PLN", logo: plnLogo },
                { name: "JASA MARGA", logo: jasamargaLogo },
                { name: "WIKA", logo: wikaLogo },
                { name: "ADHI KARYA", logo: adhiLogo },
                { name: "ANGKASA PURA", logo: angkasaPuraLogo },
                { name: "TELKOM INDONESIA", logo: telkomLogo },
                { name: "TELKOMSEL", logo: telkomselLogo },
                { name: "INDOSAT", logo: indosatLogo },
                { name: "XL AXIATA", logo: xlLogo },
                // Fallback text for missing
                { name: "KEMENTRIAN KEUANGAN" },
                { name: "KEMENTRIAN ESDM" },
                { name: "KEMENPORA" }
            ]
        },
        {
            category: t('portfolio.categories.media'),
            partners: [
                { name: "TV ONE", logo: tvOneLogo },
                { name: "INDOSIAR", logo: indosiarLogo },
                { name: "SCTV", logo: sctvLogo },
                { name: "SMART FM", logo: smartFmLogo },
                { name: "MRA Group", logo: mraLogo },
                { name: "The Jakarta Post", logo: jakpostLogo }
            ]
        }
    ];

    return (
        <div className="bg-white text-black">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0">
                    <img
                        src={portofolioHeroBg}
                        alt="Portfolio Hero"
                        className="w-full h-full object-cover opacity-90"
                        fetchPriority="high"
                        loading="lazy"
                        decoding="async"
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
                            {t('portfolio.heroTitle')}
                        </h1>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                            <h2 className="text-xl md:text-2xl text-gray-200">{t('portfolio.heroSubtitle')}</h2>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                            {t('portfolio.heroDesc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Framework Section - Diamond Grid Redesign */}
            <section className="py-20 bg-white text-black overflow-hidden relative">
                <div className="container mx-auto px-8 md:px-12">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-16">
                        {/* Left Content */}
                        <div className="w-full md:w-1/2 z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                                    {t('portfolio.ourPortfolio')}
                                </span>
                                <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight text-primary mb-6">
                                    {t('portfolio.discoverTitle')} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{t('portfolio.discoverHighlight')}</span> {t('portfolio.discoverSuffix')}
                                </h2>
                                <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
                                    {t('portfolio.discoverDesc')}
                                </p>
                                <a
                                    href="#client2"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-wider hover:bg-purple-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    {t('portfolio.seeAll')}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Diamond Grid */}
                        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
                            {/* Gradient Fade Masks */}
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>

                            {/* Rotated Container */}
                            <div className="transform rotate-45 w-max flex-none scale-[0.4] sm:scale-50 md:scale-[0.45] lg:scale-[0.55] xl:scale-[0.6] 2xl:scale-90 origin-center transition-transform duration-300 ease-out">
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        portfolioImg1, portfolioImg2, portfolioImg3,
                                        portfolioImg4, portfolioImg5, portfolioImg6,
                                        portfolioImg7, portfolioImg8, portfolioImg9
                                    ].map((img, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="w-48 h-48 overflow-hidden rounded-2xl shadow-xl relative group"
                                        >
                                            <div className="w-[150%] h-[150%] -translate-x-1/4 -translate-y-1/4 transform -rotate-45 origin-center">
                                                <img
                                                    src={img}
                                                    alt={`Portfolio ${i}`}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-colors duration-300"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-50 rounded-full blur-3xl -z-10 opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Marquee Showcase - White Theme */}
            <section id="client2" className="py-24 bg-white text-black relative overflow-hidden text-center">
                {/* Decorative background blur */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                                {t('portfolio.trustedTitle')}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
                                {t('portfolio.partnersTitle')} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{t('portfolio.partnersHighlight')}</span>
                            </h2>
                            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                                {t('portfolio.partnersDesc')}
                            </p>
                        </motion.div>
                    </div>

                    <div className="space-y-16">
                        {partnerCategories.map((group, idx) => (
                            <div key={idx} className="relative">
                                <div className="text-center mb-6">
                                    <span className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-gray-400">{group.category}</span>
                                </div>
                                <Marquee
                                    items={group.partners}
                                    direction={idx % 2 === 0 ? "left" : "right"}
                                    speed={40}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;

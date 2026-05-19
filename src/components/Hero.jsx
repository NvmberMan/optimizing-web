import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import herobackground from "../assets/herobackground.png"

import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-10" />
                {/* Radial gradient for "sunlight" effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent z-10 opacity-80" />

                <img
                    src={herobackground}
                    alt="Office Background"
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-8 md:px-12">
                <div className="max-w-7xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-wider leading-tight text-left"
                    >
                        {t('hero.titlePart1')} <br />
                        <span className="text-white">
                            {t('hero.titlePart2')}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-normal text-left"
                    >
                        {t('hero.description')}
                    </motion.p>

                </div>
            </div>

            {/* Bottom Center Button */}
            <motion.div
                initial={{ opacity: 0, y: 20, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-20 left-1/2 z-30"
            >
                <Link to="/contact" className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 group shadow-lg">
                    {t('hero.cta')}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
            </motion.div>

            {/* Sticky Contact Button */}

        </section>
    );
};

export default Hero;

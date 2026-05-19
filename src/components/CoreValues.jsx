import React from 'react';
import { Target, Lightbulb, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import precisionLogo from '../assets/home_precision.svg';
import innovationLogo from '../assets/home_innovation.svg';
import integrityLogo from '../assets/home_integrity.svg';


import { useLanguage } from '../context/LanguageContext';

const CoreValues = () => {
    const { t } = useLanguage();
    const values = [
        {
            image: precisionLogo,
            title: t('coreValues.precision.title'),
            desc: t('coreValues.precision.desc')
        },
        {
            image: innovationLogo,
            title: t('coreValues.innovation.title'),
            desc: t('coreValues.innovation.desc')
        },
        {
            image: integrityLogo,
            title: t('coreValues.integrity.title'),
            desc: t('coreValues.integrity.desc')
        }
    ];

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 opacity-40">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                    alt="Team Meeting"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div className="container relative z-10 mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content - Values */}
                <div className="space-y-12 ml-20">
                    {values.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`flex items-center space-x-6 ${idx === 0 ? 'ml-4' : ''}`}
                        >
                            <div className="w-25 h-25 overflow-hidden shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-opacity"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-white text-lg font-bold uppercase mb-1">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Content - Title & Quote */}
                <div className="text-right flex flex-col items-end">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-5xl font-bold text-white uppercase mb-0 mr-1"
                    >
                        {t('coreValues.title')}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#2a0a38] py-3 pl-8 inline-block mt-2"
                    >
                        <h3 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-wider">{t('coreValues.subtitle')}</h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-gray-300 text-lg leading-relaxed text-right md:pl-20"
                    >
                        {t('coreValues.quote')}
                    </motion.p>
                </div>

            </div>
        </section>
    );
};

export default CoreValues;

import React from 'react';
import { motion } from 'framer-motion';
import EndToEnd from '../assets/home_end_to_end.svg';
import Strategic from '../assets/home_strategic.svg';
import Collaborative from '../assets/home_collaborative.svg';
import aboutbackground from "../assets/portofolios/portofolio_08.png"
import portfolioImg7 from '../assets/portofolios/portofolio_13.png';

import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs = () => {
    const { t } = useLanguage();
    const features = [
        {
            icon: EndToEnd,
            title: t('whyChooseUs.endToEnd.title'),
            description: t('whyChooseUs.endToEnd.desc'),
            color: "bg-red-500", // Example accent color
            borderColor: "border-red-500"
        },
        {
            icon: Strategic,
            title: t('whyChooseUs.strategic.title'),
            description: t('whyChooseUs.strategic.desc'),
            color: "bg-blue-500",
            borderColor: "border-blue-500"
        },
        {
            icon: Collaborative,
            title: t('whyChooseUs.collaborative.title'),
            description: t('whyChooseUs.collaborative.desc'),
            color: "bg-green-500",
            borderColor: "border-green-500"
        }
    ];

    return (
        <section id="why-choose-us" className="relative bg-white text-black overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Left Side - Content */}
                <div className="w-full md:w-1/2 py-20 px-8 md:px-12 flex items-center z-10">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight text-primary mb-2 whitespace-pre-line">
                                {t('whyChooseUs.title')}
                            </h2>
                            <div className="h-1 w-24 bg-red-600 rounded-full"></div>
                        </motion.div>

                        <div className="space-y-16 relative pl-4">
                            {/* Vertical Connection Line */}
                            <div className="absolute left-[2.5rem] top-4 bottom-4 w-1 bg-gray-200 -z-10"></div>

                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex items-center gap-10 group"
                                >
                                    {/* Icon Only - Larger */}
                                    <div className={`relative z-10 w-20 h-20 flex items-center justify-center bg-white group-hover:scale-110 transition-transform duration-300 shrink-0 rounded-full`}>
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-red-700 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Image with Diagonal Clip */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
                    <div
                        className="absolute inset-0 bg-gray-200 overflow-hidden"
                        style={{
                            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" // The diagonal cut
                        }}
                    >
                        <img
                            src={aboutbackground}
                            alt="Team Collaboration"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    </div>

                    {/* Decorative Red/Gold Line along the cut */}
                    {/* <div className="hidden md:block absolute top-0 bottom-0 w-2 bg-red-600 z-20" ... ></div> */}
                </div>
            </div>

            {/* Mobile Image (Visible only on small screens without messy clips if needed, or keeping the clip) */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .dashed-line {
                        left: 2rem; /* Adjust for mobile icon center */
                    }
                }
            `}</style>
        </section>
    );
};

export default WhyChooseUs;

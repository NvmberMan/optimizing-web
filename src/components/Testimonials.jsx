import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-8 md:px-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-12"
                >
                    {t('testimonials.title')}
                </motion.h2>

                <div className="max-w-4xl mx-auto w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=kbJ1c8aa9f7-6mQ1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                <p className="mt-8 text-gray-400 italic">
                    "{t('testimonials.quote')}"
                </p>
            </div>
        </section>
    );
};

export default Testimonials;

import React from 'react';
import { motion } from 'framer-motion';

import assetra from '../assets/subsidiaries/subsidiaries_assetra_management.svg';
import bedankaEvent from '../assets/subsidiaries/subsidiaries_bedanka_event.svg';
import bridgeCsr from '../assets/subsidiaries/subsidiaries_bridge_csr.svg';
import creativeSolution from '../assets/subsidiaries/subsidiaries_creative_solution.svg';
import danaMitra from '../assets/subsidiaries/subsidiaries_dana_mitra.svg';
import dejavu from '../assets/subsidiaries/subsidiaries_dejavu_adventure.svg';
import eventSafety from '../assets/subsidiaries/subsidiaries_event_safety_management_servce.svg';
import innerspeaker from '../assets/subsidiaries/subsidiaries_innerspeaker.svg';
import marchendnice from '../assets/subsidiaries/subsidiaries_marchendnice.svg';
import prodesign from '../assets/subsidiaries/subsidiaries_prodesign.svg';
import sadarin from '../assets/subsidiaries/subsidiaries_sadarin.svg';
import sadarinResources from '../assets/subsidiaries/subsidiaries_sadarin_resources.svg';
import seolahSekolah from '../assets/subsidiaries/subsidiaries_seolah_sekolah.svg';
import strategicius from '../assets/subsidiaries/subsidiaries_strategicius.svg';
import trainingDev from '../assets/subsidiaries/subsidiaries_training_and_development.svg';
import vaolav from '../assets/subsidiaries/subsidiaries_vaolav.svg';
import wafira from '../assets/subsidiaries/subsidiaries_wafira_learning_center.svg';
import ppro from '../assets/subsidiaries/subsidiaries_ppro.svg';
import alphatheta from '../assets/subsidiaries/subsidiaries_alphatheta.svg';

import { useLanguage } from '../context/LanguageContext';

const Subsidiaries = () => {
    const { t } = useLanguage();
    // Data synced with IntegratedServices.jsx
    const subsidiaries = [
        { name: t('subsidiaries.bedankaEvent.name'), tag: t('subsidiaries.bedankaEvent.tag'), logo: bedankaEvent, scale: 1.6, website: "#" },
        { name: t('subsidiaries.creativeSolution.name'), tag: t('subsidiaries.creativeSolution.tag'), logo: creativeSolution, scale: 0.6, website: "https://cionid.bedankagroup.co.id/" },
        { name: t('subsidiaries.prodesign.name'), tag: t('subsidiaries.prodesign.tag'), logo: prodesign, scale: 0.9, website: "#" },
        { name: t('subsidiaries.marchendnice.name'), tag: t('subsidiaries.marchendnice.tag'), logo: marchendnice, scale: 0.7, website: "#" },
        { name: t('subsidiaries.eventSafety.name'), tag: t('subsidiaries.eventSafety.tag'), logo: eventSafety, scale: 0.8, website: "#" },
        { name: t('subsidiaries.innerspeaker.name'), tag: t('subsidiaries.innerspeaker.tag'), logo: innerspeaker, scale: 0.7, website: "#" },
        { name: t('subsidiaries.dejavu.name'), tag: t('subsidiaries.dejavu.tag'), logo: dejavu, scale: 0.7, website: "#" },
        { name: t('subsidiaries.seolahSekolah.name'), tag: t('subsidiaries.seolahSekolah.tag'), logo: seolahSekolah, scale: 0.9, website: "#" },
        { name: t('subsidiaries.ppro.name'), tag: t('subsidiaries.ppro.tag'), logo: ppro, scale: 0.8, website: "#" },
        { name: t('subsidiaries.wafira.name'), tag: t('subsidiaries.wafira.tag'), logo: wafira, scale: 0.9, website: "#" },
        { name: t('subsidiaries.strategicius.name'), tag: t('subsidiaries.strategicius.tag'), logo: strategicius, scale: 0.8, website: "#" },
        { name: t('subsidiaries.vaolav.name'), tag: t('subsidiaries.vaolav.tag'), logo: vaolav, scale: 0.8, website: "#" },
        { name: t('subsidiaries.danaMitra.name'), tag: t('subsidiaries.danaMitra.tag'), logo: danaMitra, scale: 0.9, website: "#" },
        { name: t('subsidiaries.bridgeCsr.name'), tag: t('subsidiaries.bridgeCsr.tag'), logo: bridgeCsr, scale: 0.7, website: "#" },
        { name: t('subsidiaries.sadarin.name'), tag: t('subsidiaries.sadarin.tag'), logo: sadarin, scale: 0.8, website: "#" },
        { name: t('subsidiaries.sadarinResources.name'), tag: t('subsidiaries.sadarinResources.tag'), logo: sadarinResources, scale: 0.8, website: "#" },
        { name: t('subsidiaries.assetra.name'), tag: t('subsidiaries.assetra.tag'), logo: assetra, scale: 0.8, website: "#" },
        { name: t('subsidiaries.alphaTheta.name'), tag: t('subsidiaries.alphaTheta.tag'), logo: alphatheta, scale: 1, website: "#" },
    ];

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-8 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-2">
                        {t('subsidiaries.title')}
                    </h2>
                    <p className="text-gray-400 italic">{t('subsidiaries.subtitle')}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-0 md:px-20">
                    {subsidiaries.map((sub, index) => (
                        <motion.a
                            key={index}
                            href={sub.website}
                            target={sub.website === "#" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex flex-col items-center justify-center p-4 cursor-pointer "
                            onClick={(e) => {
                                if (sub.website === "#") e.preventDefault();
                            }}
                        >
                            <div className="h-48 mb-6 flex items-center justify-center overflow-hidden group-hover:border-white transition-colors">
                                <img
                                    src={sub.logo}
                                    alt={sub.name}
                                    style={{
                                        transform: `scale(${sub.scale})`
                                    }}
                                    className="object-contain max-w-full max-h-full opacity-90 hover:opacity-100 transition-opacity"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <p className="text-[14px] text-gray-400 text-center px-2 leading-relaxed whitespace-pre-line">{sub.tag}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Subsidiaries;

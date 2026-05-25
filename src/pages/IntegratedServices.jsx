import React from 'react';

import { motion } from 'framer-motion';

import heroBackground from '../assets/integrated_services_hero.webp';

//logo
import assetra from '../assets/subsidiaries/subsidiaries_assetra_management.svg';
import bedankaEvent from '../assets/subsidiaries/subsidiaries_bedanka_event.webp';
import bridgeCsr from '../assets/subsidiaries/subsidiaries_bridge_csr.svg';
import creativeSolution from '../assets/subsidiaries/subsidiaries_creative_solution.webp';
import danaMitra from '../assets/subsidiaries/subsidiaries_dana_mitra.webp';
import dejavu from '../assets/subsidiaries/subsidiaries_dejavu_adventure.svg';
import eventSafety from '../assets/subsidiaries/subsidiaries_event_safety_management_servce.webp';
import innerspeaker from '../assets/subsidiaries/inner.svg';
import marchendnice from '../assets/subsidiaries/subsidiaries_marchendnice.svg';
import prodesign from '../assets/subsidiaries/prodesign.svg';
import sadarin from '../assets/subsidiaries/subsidiaries_sadarin.svg';
import sadarinResources from '../assets/subsidiaries/subsidiaries_sadarin_resources.svg';
import seolahSekolah from '../assets/subsidiaries/subsidiaries_seolah_sekolah.webp';
import strategicius from '../assets/subsidiaries/subsidiaries_strategicius.svg';
import vaolav from '../assets/subsidiaries/subsidiaries_vaolav.svg';
import wafira from '../assets/subsidiaries/subsidiaries_wafira_learning_center.webp';
import ppro from '../assets/subsidiaries/subsidiaries_ppro.webp';
import alphatheta from '../assets/subsidiaries/subsidiaries_alphatheta.webp';


//background
import bgBedankaEvent from '../assets/integrated_services/bedanka_event_management.webp';
import bgCreativeSolution from '../assets/integrated_services/creative_soludion.webp';
import bgProdesign from '../assets/integrated_services/prodesign.webp';
import bgMarchendnice from '../assets/integrated_services/merchandise.webp';
import bgEventSafety from '../assets/integrated_services/event_safety.webp';
import bgInnerspeaker from '../assets/integrated_services/innerspeaker.webp';
import bgDejavu from '../assets/integrated_services/dejavu_adventure.webp';
import bgSeolahSekolah from '../assets/integrated_services/seolah_sekolah.webp';
import bgPPro from '../assets/integrated_services/ppro.webp';
import bgWafira from '../assets/integrated_services/wafira.png';
import bgStrategicius from '../assets/integrated_services/strategicius.webp';
import bgVaolav from '../assets/integrated_services/vaclav.png';
import bgDanaMitra from '../assets/integrated_services/lingkungan.webp';
import bgBridgeCsr from '../assets/integrated_services/bridge_csr.webp';
import bgSadarin from '../assets/integrated_services/sadarin.webp';
import bgSadarinResources from '../assets/integrated_services/sadarin_resources.webp';
import bgAssetra from '../assets/integrated_services/assetra_management.png';
import bgAlphaTheta from '../assets/integrated_services/training_and_development.png';



import { useLanguage } from '../context/LanguageContext';

const IntegratedServices = () => {
    const { t } = useLanguage();
    const subsidiaries = [
        { name: t('subsidiaries.bedankaEvent.name'), tag: t('subsidiaries.bedankaEvent.tag'), logo: bedankaEvent, image: bgBedankaEvent, desc: t('integratedServices.subsidiaries.bedankaEvent.desc'), scale: 2.2, website: "#" },
        { name: t('subsidiaries.creativeSolution.name'), tag: t('subsidiaries.creativeSolution.tag'), logo: creativeSolution, image: bgCreativeSolution, desc: t('integratedServices.subsidiaries.creativeSolution.desc'), scale: 1, website: "https://cionid.bedankagroup.co.id/" },
        { name: t('subsidiaries.prodesign.name'), tag: t('subsidiaries.prodesign.tag'), logo: prodesign, image: bgProdesign, desc: t('integratedServices.subsidiaries.prodesign.desc'), scale: 1, website: "#" },
        { name: t('subsidiaries.marchendnice.name'), tag: t('subsidiaries.marchendnice.tag'), logo: marchendnice, image: bgMarchendnice, desc: t('integratedServices.subsidiaries.marchendnice.desc'), scale: 0.7, website: "#" },
        { name: t('subsidiaries.eventSafety.name'), tag: t('subsidiaries.eventSafety.tag'), logo: eventSafety, image: bgEventSafety, desc: t('integratedServices.subsidiaries.eventSafety.desc'), scale: 0.8, website: "#" },
        { name: t('subsidiaries.innerspeaker.name'), tag: t('subsidiaries.innerspeaker.tag'), logo: innerspeaker, image: bgInnerspeaker, desc: t('integratedServices.subsidiaries.innerspeaker.desc'), scale: 1, website: "#" },
        { name: t('subsidiaries.dejavu.name'), tag: t('subsidiaries.dejavu.tag'), logo: dejavu, image: bgDejavu, desc: t('integratedServices.subsidiaries.dejavu.desc'), scale: 0.8, website: "#" },
        { name: t('subsidiaries.seolahSekolah.name'), tag: t('subsidiaries.seolahSekolah.tag'), logo: seolahSekolah, image: bgSeolahSekolah, desc: t('integratedServices.subsidiaries.seolahSekolah.desc'), scale: 1, website: "#" },
        { name: t('subsidiaries.ppro.name'), tag: t('subsidiaries.ppro.tag'), logo: ppro, image: bgPPro, desc: t('integratedServices.subsidiaries.ppro.desc'), scale: 0.8, website: "#" },
        { name: t('subsidiaries.wafira.name'), tag: t('subsidiaries.wafira.tag'), logo: wafira, image: bgWafira, desc: t('integratedServices.subsidiaries.wafira.desc'), scale: 1, website: "#" },
        { name: t('subsidiaries.strategicius.name'), tag: t('subsidiaries.strategicius.tag'), logo: strategicius, image: bgStrategicius, desc: t('integratedServices.subsidiaries.strategicius.desc'), scale: 0.6, website: "#" },
        { name: t('subsidiaries.vaolav.name'), tag: t('subsidiaries.vaolav.tag'), logo: vaolav, image: bgVaolav, desc: t('integratedServices.subsidiaries.vaolav.desc'), scale: 0.5, website: "#" },
        { name: t('subsidiaries.danaMitra.name'), tag: t('subsidiaries.danaMitra.tag'), logo: danaMitra, image: bgDanaMitra, desc: t('integratedServices.subsidiaries.danaMitra.desc'), scale: 1.2, website: "#" },
        { name: t('subsidiaries.bridgeCsr.name'), tag: t('subsidiaries.bridgeCsr.tag'), logo: bridgeCsr, image: bgBridgeCsr, desc: t('integratedServices.subsidiaries.bridgeCsr.desc'), scale: 0.8, website: "#" },
        { name: t('subsidiaries.sadarin.name'), tag: t('subsidiaries.sadarin.tag'), logo: sadarin, image: bgSadarin, desc: t('integratedServices.subsidiaries.sadarin.desc'), scale: 0.5, website: "#" },
        { name: t('subsidiaries.sadarinResources.name'), tag: t('subsidiaries.sadarinResources.tag'), logo: sadarinResources, image: bgSadarinResources, desc: t('integratedServices.subsidiaries.sadarinResources.desc'), scale: 0.5, website: "#" },
        { name: t('subsidiaries.assetra.name'), tag: t('subsidiaries.assetra.tag'), logo: assetra, image: bgAssetra, desc: t('integratedServices.subsidiaries.assetra.desc'), scale: 1, website: "#" },
        { name: t('subsidiaries.alphaTheta.name'), tag: t('subsidiaries.alphaTheta.tag'), logo: alphatheta, image: bgAlphaTheta, desc: t('integratedServices.subsidiaries.alphaTheta.desc'), scale: 1, website: "#" },
    ];

    return (
        <div className="bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroBackground}
                        alt="Integrated Services Hero"
                        className="w-full h-full object-cover opacity-60"
                        fetchPriority="high"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-8 md:px-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-4 whitespace-pre-line"
                    >
                        {t('integratedServices.heroTitle')}
                    </motion.h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                        {t('integratedServices.heroDesc')}
                    </p>
                </div>
            </section>

            {/* Subsidiary Showcase */}
            <section className="py-20">
                <div className="container mx-auto px-8 md:px-12 mb-12 text-right">
                    <h2 className="text-2xl md:text-4xl font-bold uppercase text-purple-400">
                        {t('integratedServices.showcaseTitle')}
                    </h2>
                    <p className="text-gray-500 text-sm">{t('integratedServices.showcaseSubtitle')}</p>
                </div>

                <div className="space-y-16">
                    {subsidiaries.map((sub, index) => (
                        <motion.a
                            key={index}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] w-full overflow-hidden group block cursor-pointer"
                            onClick={(e) => {
                                if (sub.website === "#") e.preventDefault();
                            }}
                        >
                            <img
                                src={sub.image}
                                alt={sub.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
                                <div className="w-30 h-40 overflow-hidden flex items-center justify-center">
                                    {/* Placeholder Logo - replace with actual logo */}
                                    <img
                                        src={sub.logo}
                                        alt={`${sub.name} Logo`}
                                        className="w-full h-full object-contain p-2"
                                        style={{ transform: `scale(${sub.scale || 1})` }}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <h3 className="text-3xl font-bold mb-2">{sub.name}</h3>
                                <p className="text-gray-300 max-w-xl mb-8 whitespace-pre-line">{sub.desc}</p>
                                <a href={sub.website} target={sub.website === "#" ? "_self" : "_blank"}>
                                    <span
                                        className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm font-bold inline-block"
                                    >
                                        {t('integratedServices.visitSite')}
                                    </span>
                                </a>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default IntegratedServices;

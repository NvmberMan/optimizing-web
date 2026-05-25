import React, { useRef } from 'react';
import { Instagram, Linkedin, Youtube, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LinkedInCard from './atom/LinkedinCard';
import linkedin1 from '../assets/linkedin/linkedin-01.webp';
import linkedin2 from '../assets/linkedin/linkedin-02.webp';
import linkedin3 from '../assets/linkedin/linkedin-03.webp';
import linkedin4 from '../assets/linkedin/linkedin-04.webp';

const SocialConnect = () => {
    const { t } = useLanguage();
    const scrollRef = useRef(null);

    const linkedInPosts = [
        {
            index: 0,
            link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7419970013111107584?compact=1",
            preview: linkedin1
        }, 
        {
            index: 1,
            link:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7409560797498122241?compact=1",
            preview: linkedin2
        },
        {
            index: 2,
            link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7413831965184995328?compact=1",
            preview: linkedin3
        }, 
        {
            index: 3,
            link:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7412077232199954432?compact=1",
            preview: linkedin4
        }        
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {x``
            const { current } = scrollRef;
            // Scroll by one card width (340px) + gap (24px) = 364px
            const scrollAmount = direction === 'left' ? -364 : 364;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-12 text-left px-4">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-2">
                        {t('socialConnect.title')}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-400 text-lg">
                        <span>{t('socialConnect.follow')}</span>
                        <a href="https://www.linkedin.com/company/bedanka-interubber-indonesia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                            <Linkedin size={24} className="text-white group-hover:text-blue-400 transition-colors" />
                            <span className="font-bold text-white border-b border-transparent group-hover:border-white">Linkedin</span>
                        </a>
                    </div>
                </div>

                <div className="relative group px-4 md:px-12">
                    {/* Navigation Buttons */}
                    {/* <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors hidden md:block"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors hidden md:block"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={32} />
                    </button> */}

                    {/* Carousel Container */}
                     {/* <img src={linkedin1} alt="LinkedIn Preview" className="w-full h-full object-cover" /> */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {linkedInPosts.map((post) => (
                            <LinkedInCard 
                            key={post.index}
                            url = {post.link}
                            index = {post.index}
                            previewImage = {post.preview}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialConnect;

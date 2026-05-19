import React from 'react';
import whatsappIcon from '../assets/whatsapp_floating.svg';

const FloatingWhatsApp = () => {

    return (
        <a
            href="https://wa.me/6282114227789"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
            aria-label="Contact us on WhatsApp"
        >
            <div className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg mb-2">
                <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg border border-white/20 group-hover:bg-purple-900/90 transition-colors">
                Contact Us
            </div>
        </a>
    );
};

export default FloatingWhatsApp;

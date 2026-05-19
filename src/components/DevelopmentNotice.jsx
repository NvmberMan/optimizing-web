import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const DevelopmentNotice = () => {
    return (
        <div className="w-full bg-gray-600 text-white text-center py-2 px-4 shadow-md z-[60] relative">
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium tracking-wide">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>UNDER DEVELOPMENT: This website is currently being built. Some features may not work as expected.</span>
            </div>
        </div>
    );
};

export default DevelopmentNotice;

import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import CoreValues from '../components/CoreValues';
import Subsidiaries from '../components/Subsidiaries';
import SocialConnect from '../components/SocialConnect';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <CoreValues />
            <Subsidiaries />
            <SocialConnect />
            {/* <Testimonials /> */}
        </>
    );
};

export default Home;

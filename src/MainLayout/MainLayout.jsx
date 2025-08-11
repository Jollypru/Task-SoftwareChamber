import React from 'react';
import { Outlet } from 'react-router-dom';
import IntroStatsSection from '../components/Intro_Section/IntroStatsSection';
import ServicesSection from '../components/Services/ServicesSection';
import WhyChooseSection from '../components/WhyChoose/WhyChooseSection';

const MainLayout = () => {
    return (
        <div className='bricolage-grotesque-font'>
            <IntroStatsSection></IntroStatsSection>
            <ServicesSection></ServicesSection>
            <WhyChooseSection></WhyChooseSection>
        </div>
    );
};

export default MainLayout;
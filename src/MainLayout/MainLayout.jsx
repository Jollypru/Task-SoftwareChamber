import React from 'react';
import { Outlet } from 'react-router-dom';
import IntroStatsSection from '../components/Intro_Section/IntroStatsSection';
import ServicesSection from '../components/Services/ServicesSection';
import WhyChooseSection from '../components/WhyChoose/WhyChooseSection';
import StackPowersSection from '../components/StackPowers/StackPowersSection';

const MainLayout = () => {
    return (
        <div className='bricolage-grotesque-font'>
            <IntroStatsSection></IntroStatsSection>
            <ServicesSection></ServicesSection>
            <WhyChooseSection></WhyChooseSection>
            <StackPowersSection></StackPowersSection>
        </div>
    );
};

export default MainLayout;
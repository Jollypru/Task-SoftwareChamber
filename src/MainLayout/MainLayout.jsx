import React from 'react';
import { Outlet } from 'react-router-dom';
import IntroStatsSection from '../components/Intro_Section/IntroStatsSection';
import ServicesSection from '../components/Services/ServicesSection';

const MainLayout = () => {
    return (
        <div className='bricolage-grotesque-font'>
            <IntroStatsSection></IntroStatsSection>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default MainLayout;
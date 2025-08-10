import React from 'react';
import { Outlet } from 'react-router-dom';
import IntroStatsSection from '../components/Intro_Section/IntroStatsSection';

const MainLayout = () => {
    return (
        <div className='bricolage-grotesque-font'>
            <IntroStatsSection></IntroStatsSection>
        </div>
    );
};

export default MainLayout;
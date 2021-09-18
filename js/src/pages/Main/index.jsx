import React from 'react';

import BottomNavigation from '../../layout/BottomNavigation';
import TopNavigation from '../../layout/TopNavigation';
import TopGuide from './components/TopGuide';
import LinkList from './components/LinkList';
import MyBoard from './components/MyBoard';
import RealTimeBoard from './components/RealTimeBoard';
import Popular from './components/Popular';

const Index = () => {
    return (
        <>
            <TopNavigation />
            <TopGuide />
            <LinkList />
            <MyBoard />
            <RealTimeBoard />
            <Popular />
            <BottomNavigation activeNum={1} />
        </>
    );
};

export default Index;

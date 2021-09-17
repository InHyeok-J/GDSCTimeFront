import React from 'react';

import BottomNavigation from '../../layout/BottomNavigation';
import TopNavigation from '../../layout/TopNavigation';
import TopGuide from './components/TopGuide';
import LinkList from './components/LinkList';
import MyBoard from './components/MyBoard';

const Index = () => {
    return (
        <>
            <TopNavigation />
            <TopGuide />
            <LinkList />
            <MyBoard />
            <BottomNavigation activeNum={1} />
        </>
    );
};

export default Index;

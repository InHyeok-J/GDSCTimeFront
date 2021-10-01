import React from 'react';
import styled from 'styled-components';
import BottomNavigation from '../../layout/BottomNavigation';
import TopNavigation from '../../layout/TopNavigation';
import TopGuide from './components/TopGuide';
import LinkList from './components/LinkList';
import MyBoard from './components/MyBoard';
import RealTimeBoard from './components/RealTimeBoard';
import Popular from './components/Popular';

const MainWrapper = styled.div`
    padding-top: 70px;
    padding-bottom: 50px;
`;

const Index = () => {
    return (
        <MainWrapper>
            <TopNavigation />
            <TopGuide />
            <LinkList />
            <MyBoard />
            <RealTimeBoard />
            <Popular />
            <BottomNavigation activeNum={1} />
        </MainWrapper>
    );
};

export default Index;

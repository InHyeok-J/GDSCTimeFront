import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BottomNavigation from '../../layout/BottomNavigation';
import TopNavigation from '../../layout/TopNavigation';
import TopGuide from './components/TopGuide';
import LinkList from './components/LinkList';
import MyBoard from './components/MyBoard';
import RealTimeBoard from './components/RealTimeBoard';
import Popular from './components/Popular';
import Setting from './components/Setting';
import { useHistory } from 'react-router';
import { getUserAction } from '../../module/user';
import { useDispatch } from 'react-redux';

const MainWrapper = styled.div`
    padding-top: 70px;
    padding-bottom: 50px;
`;

const Index = ({ match }) => {
    const defaultSetting = {
        isMine: true,
        isRealTime: true,
        isHot: true,
    };
    const history = useHistory();
    const dispatch = useDispatch();
    const [setting, setSetting] = useState(defaultSetting);
    useEffect(() => {
        const storage = window.localStorage.getItem('setting');
        console.log(storage);
        if (!storage) {
            window.localStorage.setItem(
                'setting',
                JSON.stringify(defaultSetting),
            );
        } else {
            const storageJson = JSON.parse(storage);
            setSetting({
                isMine: storageJson.isMine,
                isRealTime: storageJson.isRealTime,
                isHot: storageJson.isHot,
            });
        }
        dispatch(getUserAction());
    }, []);

    return (
        <MainWrapper>
            <TopNavigation />
            <TopGuide />
            <LinkList />
            {setting.isMine && <MyBoard />}
            {setting.isRealTime && <RealTimeBoard />}
            {setting.isHot && <Popular />}
            <Setting />
            <BottomNavigation activeNum={1} />
        </MainWrapper>
    );
};

export default Index;

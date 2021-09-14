import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from '../components/Colors';

import bellActive from '../assets/nav/bellActive.png';
import bellDisable from '../assets/nav/bellDisable.png';
import boardActive from '../assets/nav/boardActive.png';
import boardDisable from '../assets/nav/boardDisable.png';
import homeActive from '../assets/nav/homeActive.svg';
import homeDisable from '../assets/nav/homeDisable.svg';

const NavigationWrapper = styled.div`
    display: flex;
    height: 48px;
    border-top: 1px solid ${COLORS.grey_light};
    background-color: #ffffff;
    .navigation-item {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 24px;
            height: 24px;
        }
    }
`;

const BottomNavigation = ({ activeNum }) => {
    const homeIcon = activeNum === 1 ? homeActive : homeDisable;
    const boardIcon = activeNum === 2 ? boardActive : boardDisable;
    const bellIcon = activeNum === 3 ? bellActive : bellDisable;

    return (
        <NavigationWrapper className="bottom-navigation">
            <Link className="navigation-item" to="/">
                <img src={homeIcon} alt="home" />
            </Link>
            <Link className="navigation-item" to="/board">
                <img src={boardIcon} alt="board" />
            </Link>
            <Link className="navigation-item" to="/alarm">
                <img src={bellIcon} alt="alram" />
            </Link>
        </NavigationWrapper>
    );
};

export default BottomNavigation;

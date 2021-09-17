import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../components/Colors';
import { Link } from 'react-router-dom';
import SearchImg from '../assets/nav/search.svg';
import MyPageImg from '../assets/nav/mypage.svg';
import { throttle } from '../utils/throttle';

const TopNavigationWrapper = styled.div`
    background-color: #ffffff;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    max-width: 500px;
    left: 50%;
    transform: translate(-50%, 0);
    top: 0px;
    right: 0px;
    height: 60px;
    z-index: 20;
    .everytime-text {
        font-size: 0.8rem;
        color: ${COLORS.red};
    }
    .top-navigation-menu {
        margin-top: 5px;
        width: 100%;
        height: object-fit;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .school-name {
        font-size: 1.4rem;
    }
    .link-block {
        width: 100px;
        height: auto;
    }
    img {
        width: 21px;
    }

    .link-item {
        display: inline-block;
        width: auto;
        height: auto;
    }
    .link-item:first-child {
        margin-right: 25px;
    }
    box-shadow: 0;
    transition: box-shadow 0.5s;
    &.scrolled {
        box-shadow: 0 3px 6px -6px ${COLORS.grey_text};
    }
`;

const TopNavigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollListener = () => {
        setIsScrolled(window.pageYOffset > 0);
        console.log(isScrolled);
    };

    const throttleScrollListener = throttle(scrollListener, 50);

    useEffect(() => {
        window.addEventListener('scroll', throttleScrollListener);
        return () => {
            window.removeEventListener('scroll', throttleScrollListener);
        };
    }, []);

    function handleScroll() {
        let scrollTop = window.scrollY;
        console.log(scrollTop);
    }

    return (
        <TopNavigationWrapper className={isScrolled ? 'scrolled' : undefined}>
            <div className="everytime-text">에브리타임</div>
            <div className="top-navigation-menu">
                <span className="school-name">서울과기대</span>
                <span className="link-block">
                    <Link to="/search" className="link-item">
                        <img src={SearchImg} alt="search" />
                    </Link>
                    <Link to="/mypage" className="link-item">
                        <img src={MyPageImg} alt="mypage" />
                    </Link>
                </span>
            </div>
        </TopNavigationWrapper>
    );
};

export default TopNavigation;

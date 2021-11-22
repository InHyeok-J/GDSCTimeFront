import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import BottomNavigation from '../../layout/BottomNavigation';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import UnderLine from './components/UnderLine';
import SliderBoard from './components/SliderBoard';
import SliderCareer from './components/SliderCareer';
import SliderPromotion from './components/SliderPromotion';
import { useDispatch } from 'react-redux';
import { INIT_BOARD } from '../../module/board';

const MainWrapper = styled.div`
    .board-page-title {
        display: flex;
    }
    .slider-wrapper {
        width: 100%;
        height: calc(100%-32px);
        margin-top: 30px;
    }
`;

const Index = () => {
    const [sliderId, setSliderId] = useState(0);
    const currentSlider = useRef();
    const dispatch = useDispatch();
    const moveSlider = (index) => {
        setSliderId(index);
        currentSlider.current.slickGoTo(index);
    };

    const settings = {
        className: 'slider-wrapper',
        dots: false,
        Infinity: false,
        slideToShow: 1,
        slideToScroll: 1,
        afterChange: (index) => setSliderId(index),
        ref: currentSlider,
    };

    useEffect(async () => {
        await dispatch({
            type: INIT_BOARD,
        });
    }, []);
    return (
        <MainWrapper>
            <div className="board-page-title">
                <button onClick={() => moveSlider(0)}>
                    <UnderLine text="게시판" isActive={sliderId === 0} />
                </button>
                <button onClick={() => moveSlider(1)}>
                    <UnderLine text="진로" isActive={sliderId === 1} />
                </button>
                <button onClick={() => moveSlider(2)}>
                    <UnderLine text="홍보" isActive={sliderId === 2} />
                </button>
            </div>
            <Slider {...settings} edgeFriction={0}>
                <div className="slider-item">
                    <SliderBoard />
                </div>
                <div className="slider-item">
                    <SliderCareer />
                </div>
                <div className="slider-item">
                    <SliderPromotion />
                </div>
            </Slider>
            <BottomNavigation activeNum={2} />
        </MainWrapper>
    );
};

export default Index;

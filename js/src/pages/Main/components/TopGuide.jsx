import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import BoardBox from '../../../components/BoardBox';
import LampImg from '../../../assets/lamp.svg';
import MoonImg from '../../../assets/moon.png';
import CheckImg from '../../../assets/check.svg';
import MoreGreyBox from '../../../components/MoreGreyBox';
import VectorRight from '../../../assets/vector/vectorRight.svg';
import PlusButton from '../../../assets/plus-sign.svg';
import { throttle } from '../../../utils/throttle';

const TopGuide = () => {
    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState();

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        setStartX(e.pageX + scrollRef.current.scrollLeft);
    };

    const onDragEnd = () => {
        setIsDrag(false);
    };

    const onDragMove = (e) => {
        e.preventDefault();

        if (isDrag) {
            console.log(e.pageX);
            scrollRef.current.scrollLeft = startX - e.pageX;
        }
    };

    const onTrollteDragMove = throttle(onDragMove, 50);
    return (
        <TopGuideWrapper
            onMouseDown={onDragStart}
            onMouseMove={onTrollteDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            ref={scrollRef}
        >
            <BoardBox size="70">
                <Container>
                    <div className="icon-block">
                        <img src={LampImg} alt="lamp" />
                    </div>
                    <div className="text-block">
                        <div className="title">나만의 채용 일정 관리법</div>
                        <div className="sub-title yello-color">
                            인기 공고 확인하고 일정 관리하기
                        </div>
                        <div className="body">
                            <MoreGreyBox>
                                자세히
                                <img src={VectorRight} alt="arrow" />
                            </MoreGreyBox>
                        </div>
                    </div>
                </Container>
            </BoardBox>
            <BoardBox size="70">
                <Container>
                    <div className="icon-block">
                        <img src={MoonImg} alt="moon" />
                    </div>
                    <div className="text-block">
                        <div className="title">수림학사</div>
                        <div className="sub-title blue-color">저녁 </div>
                        <div className="body">
                            돼지고기먹고싶다소고기먹고싶다치킨먹고싶다 족발 보쌈
                            피자
                        </div>
                    </div>
                </Container>
            </BoardBox>
            <BoardBox size="70">
                <Container>
                    <div className="icon-block">
                        <img src={CheckImg} alt="check" />
                    </div>
                    <div className="text-block">
                        <div className="title">오늘의 할일</div>
                        <div className="sub-title blue-color">
                            날짜들어갈 곳
                        </div>
                        <div className="body">
                            <MoreGreyBox>
                                추가
                                <img src={PlusButton} alt="add" />
                            </MoreGreyBox>
                            <MoreGreyBox>
                                전체보기
                                <img src={VectorRight} alt="arrow" />
                            </MoreGreyBox>
                        </div>
                    </div>
                </Container>
            </BoardBox>
        </TopGuideWrapper>
    );
};

const TopGuideWrapper = styled.div`
    padding: 10px;
    margin-top: 10px;
    max-width: 500px;
    box-sizing: border-box;
    width: auto;
    height: 200px;
    display: flex;
    overflow: hidden;
    z-index: 10;
`;

const Container = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    .icon-block {
        padding-top: 10px;
        width: 20%;
        height: 100%;
        img {
            width: 30px;
        }
    }
    .text-block {
        height: 100%;
    }
    .title {
        width: auto;
        height: object-fit;
        font-size: 1.2rem;
    }
    .sub-title {
        margin-top: 5px;
        width: auto;
        height: object-fit;
        font-size: 0.7rem;
    }
    .yello-color {
        color: rgb(234, 187, 106);
    }
    .blue-color {
        color: rgb(91, 164, 153);
    }
    .body {
        margin-top: 20px;
        font-size: 0.8rem;
    }
`;

export default TopGuide;

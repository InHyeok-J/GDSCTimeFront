import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import pinOnImg from '../../../assets/icon/pinOn.svg';
import pinOffImg from '../../../assets/icon/pinOff.svg';
import { Link } from 'react-router-dom';

const SliderBoardWrapper = styled.div`
    padding: 0px 10px 0px 10px;
    margin-right: 10px;
    div {
        display: flex;
        align-items: center;
        height: 32px;
    }
    .slider-board-category {
        margin-left: 10px;
        a {
            font-size: 0.8rem;
        }
    }
    img {
        width: 15px;
    }
`;

const initialState = {
    isFree: false,
    isSecret: false,
    isGradute: false,
    isFreshMan: false,
    isNews: false,
    isInfo: false,
};
const SliderBoard = () => {
    const [boardSetting, setBoardSetting] = useState(initialState);

    useEffect(() => {
        const storage = window.localStorage.getItem('boardSetting');
        if (storage === null) {
            window.localStorage.setItem(
                'boardSetting',
                JSON.stringify(initialState),
            );
        }
        setBoardSetting(JSON.parse(storage));
    }, []);

    const onPinToggle = (e) => {
        setBoardSetting({
            ...boardSetting,
            [e.target.name]: !boardSetting[e.target.name],
        });

        window.localStorage.setItem(
            'boardSetting',
            JSON.stringify({
                ...boardSetting,
                [e.target.name]: !boardSetting[e.target.name],
            }),
        );
    };

    if (!boardSetting) return null;
    return (
        <SliderBoardWrapper className="board-wrapper">
            <div>
                <img
                    src={boardSetting['isFree'] ? pinOnImg : pinOffImg}
                    name="isFree"
                    onClick={onPinToggle}
                />
                <span className="slider-board-category">
                    <Link to={`/board/list/1`}>자유게시판</Link>
                </span>
            </div>
            <div>
                <img
                    src={boardSetting['isSecret'] ? pinOnImg : pinOffImg}
                    name="isSecret"
                    onClick={onPinToggle}
                />
                <span className="slider-board-category">
                    <Link to={`/board/list/2`}>비밀게시판</Link>
                </span>
            </div>
            <div>
                <img
                    src={boardSetting['isGradute'] ? pinOnImg : pinOffImg}
                    name="isGradute"
                    onClick={onPinToggle}
                />
                <span className="slider-board-category">
                    <Link to={`/board/list/3`}>졸업생 게시판</Link>
                </span>
            </div>
            <div>
                <img
                    src={boardSetting['isFreshMan'] ? pinOnImg : pinOffImg}
                    name="isFreshMan"
                    onClick={onPinToggle}
                />
                <span className="slider-board-category">
                    <Link to={`/board/list/4`}>새내기 게시판</Link>
                </span>
            </div>
            <div>
                <img
                    src={boardSetting['isNews'] ? pinOnImg : pinOffImg}
                    name="isNews"
                    onClick={onPinToggle}
                />
                <span className="slider-board-category">
                    <Link to={`/board/list/5`}>시사 이슈</Link>
                </span>
            </div>
            <div>
                <img
                    src={boardSetting['isInfo'] ? pinOnImg : pinOffImg}
                    name="isInfo"
                    onClick={onPinToggle}
                />
                <span className="slider-board-category">
                    <Link to={`/board/list/6`}>정보 게시판</Link>
                </span>
            </div>
        </SliderBoardWrapper>
    );
};

export default SliderBoard;

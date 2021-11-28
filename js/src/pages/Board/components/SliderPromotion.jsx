import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dummyBoardHot } from '../../../components/dummyData';
import NotDateText from '../../../components/NotDateText';
import BoardTitle from '../../../layout/BoardTitle';
import PreviewOnly from '../../../layout/PreviewOnly';
import { getMainPromotionAction } from '../../../module/main';

const SliderPromotionWrapper = styled.div`
    .board-wrapper + .board-wrapper {
        margin-top: 5px;
    }
`;
const SliderPromotion = () => {
    const dispatch = useDispatch();
    const { mainpromotion } = useSelector((state) => state.main);
    useEffect(async () => {
        await dispatch(getMainPromotionAction(9));
    }, []);
    if (!mainpromotion) return <div>데이터 받아오는중..</div>;
    return (
        <SliderPromotionWrapper>
            <div className="board-wrapper">
                <BoardTitle more="true" size="middle" to="board/list/9">
                    인기 게시글
                </BoardTitle>
                {mainpromotion.hot_board.length >= 1 ? (
                    mainpromotion.hot_board.map((board) => (
                        <PreviewOnly
                            key={board.id}
                            id={board.id}
                            title={board.title}
                            date={board.created_at}
                            like={board.like_num}
                            comments={board.comment_num}
                        />
                    ))
                ) : (
                    <NotDateText />
                )}
            </div>
            <div className="board-wrapper">
                <BoardTitle more="true" size="middle" to="board/list/9">
                    홍보 게시판
                </BoardTitle>
                {mainpromotion.lasted_board.length >= 1 ? (
                    mainpromotion.lasted_board.map((board) => (
                        <PreviewOnly
                            key={board.id}
                            id={board.id}
                            title={board.title}
                            date={board.created_at}
                            like={board.like_num}
                            comments={board.comment_num}
                        />
                    ))
                ) : (
                    <NotDateText />
                )}
            </div>
        </SliderPromotionWrapper>
    );
};

export default SliderPromotion;

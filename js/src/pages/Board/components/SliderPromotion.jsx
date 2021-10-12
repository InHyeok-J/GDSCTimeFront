import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dummyBoardHot } from '../../../components/dummyData';
import BoardTitle from '../../../layout/BoardTitle';
import PreviewOnly from '../../../layout/PreviewOnly';

const SliderPromotionWrapper = styled.div`
    .board-wrapper + .board-wrapper {
        margin-top: 5px;
    }
`;
const SliderPromotion = () => {
    return (
        <SliderPromotionWrapper>
            <div className="board-wrapper">
                <BoardTitle more="true" size="middle" to="board/list">
                    인기 게시글
                </BoardTitle>
                {dummyBoardHot.map((board) => (
                    <Link to={`/board/detail/${board.id}`}>
                        <PreviewOnly
                            key={board.id}
                            id={board.id}
                            title={board.title}
                            date={board.date}
                            like={board.like}
                            comments={board.comments}
                        />
                    </Link>
                ))}
            </div>
            <div className="board-wrapper">
                <BoardTitle more="true" size="middle" to="board/list">
                    홍보 게시판
                </BoardTitle>
                {dummyBoardHot.map((board) => (
                    <Link to={`/board/detail/${board.id}`}>
                        <PreviewOnly
                            key={board.id}
                            id={board.id}
                            title={board.title}
                            date={board.date}
                            like={board.like}
                            comments={board.comments}
                        />
                    </Link>
                ))}
            </div>
        </SliderPromotionWrapper>
    );
};

export default SliderPromotion;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dummyBoardHot } from '../../../components/dummyData';
import BoardTitle from '../../../layout/BoardTitle';
import PreviewOnly from '../../../layout/PreviewOnly';

const SliderCareerWrapper = styled.div`
    .board-wrapper + .board-wrapper {
        margin-top: 5px;
    }
    margin-right: 10px;
`;

const SliderCareer = () => {
    return (
        <SliderCareerWrapper>
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
                <BoardTitle more="true" size="middle" to="board/list/8">
                    공기업 게시판
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
        </SliderCareerWrapper>
    );
};

export default SliderCareer;

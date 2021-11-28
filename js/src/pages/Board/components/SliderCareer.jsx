import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dummyBoardHot } from '../../../components/dummyData';
import NotDateText from '../../../components/NotDateText';
import BoardTitle from '../../../layout/BoardTitle';
import PreviewOnly from '../../../layout/PreviewOnly';
import { getMainPublicAction } from '../../../module/main';

const SliderCareerWrapper = styled.div`
    .board-wrapper + .board-wrapper {
        margin-top: 5px;
    }
    margin-right: 10px;
`;

const SliderCareer = () => {
    const dispatch = useDispatch();
    const { mainpublic } = useSelector((state) => state.main);
    useEffect(async () => {
        await dispatch(getMainPublicAction(8));
    }, []);
    if (!mainpublic) return <div>데이터 받아오는중..</div>;
    return (
        <SliderCareerWrapper>
            <div className="board-wrapper">
                <BoardTitle more="true" size="middle" to="board/list/8">
                    인기 게시글
                </BoardTitle>
                {mainpublic.hot_board.length >= 1 ? (
                    mainpublic.hot_board.map((board) => (
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
                <BoardTitle more="true" size="middle" to="board/list/8">
                    공기업 게시판
                </BoardTitle>
                {mainpublic.lasted_board.length >= 1 ? (
                    mainpublic.lasted_board.map((board) => (
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
        </SliderCareerWrapper>
    );
};

export default SliderCareer;

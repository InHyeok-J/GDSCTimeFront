import React, { useEffect } from 'react';
import styled from 'styled-components';
import BoardTitle from '../../../layout/BoardTitle';
import PreviewProfile from '../../../layout/PreviewProfile';
import PreviewBoard from '../../../layout/PreviewBoard';
import { dummyRealtime } from '../../../components/dummyData';
import { useDispatch, useSelector } from 'react-redux';
import { getMainHotAction, getMainRealTimeAction } from '../../../module/main';
import { CategoryMapper } from '../../../utils/category';
import NotDateText from '../../../components/NotDateText';

const RealTimeBoardWraaper = styled.div`
    width: auto;
    margin: 10px;
    height: auto;
    box-sizing: border-box;
`;

const RealTimeBoard = () => {
    const dispatch = useDispatch();
    const { mainrealytime } = useSelector((state) => state.main);
    useEffect(async () => {
        await dispatch(getMainRealTimeAction());
    }, []);
    if (!mainrealytime) return <div>데이터 받아오는중..</div>;
    return (
        <RealTimeBoardWraaper className="board-wrapper">
            <BoardTitle more={false}>실시간 인기 글</BoardTitle>
            {mainrealytime.length >= 1 ? (
                mainrealytime.map((v, index) => (
                    <>
                        <PreviewProfile
                            key={v.index}
                            nickname={v.nickname}
                            date={v.created_at}
                        />
                        <PreviewBoard
                            key={v.id}
                            title={v.title}
                            contents={v.content}
                            category={CategoryMapper[v.category_id]}
                            like={v.like_num}
                            comments={v.comment_num}
                        />
                    </>
                ))
            ) : (
                <NotDateText />
            )}
        </RealTimeBoardWraaper>
    );
};

export default RealTimeBoard;

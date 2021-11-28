import React, { useEffect } from 'react';
import styled from 'styled-components';
import BoardTitle from '../../../layout/BoardTitle';
import { dummyHot } from '../../../components/dummyData';
import PreviewOnly from '../../../layout/PreviewOnly';
import { useDispatch } from 'react-redux';
import { getMainHotAction, getMainRealTimeAction } from '../../../module/main';
import { useSelector } from 'react-redux';
import NotDateText from '../../../components/NotDateText';
import { useHistory } from 'react-router';

const PopularWrapper = styled.div`
    width: auto;
    height: auto;
    box-sizing: border-box;
    margin: 10px;
`;

const Popular = () => {
    const dispatch = useDispatch();
    const { mainhot } = useSelector((state) => state.main);
    const history = useHistory();
    useEffect(async () => {
        await dispatch(getMainHotAction());
    }, []);
    if (!mainhot) return <div>데이터 받아오는중 ...</div>;

    return (
        <PopularWrapper className="board-wrapper">
            <BoardTitle more={true} to={`board/list/7`}>
                HOT 게시글
            </BoardTitle>
            {mainhot.length >= 1 ? (
                mainhot.map((v) => (
                    <PreviewOnly
                        key={v.id}
                        id={v.id}
                        title={v.title}
                        date={v.created_at}
                        like={v.like_num}
                        comments={v.comment_num}
                    />
                ))
            ) : (
                <NotDateText />
            )}
        </PopularWrapper>
    );
};

export default Popular;

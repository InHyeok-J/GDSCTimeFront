import React from 'react';
import styled from 'styled-components';
import BoardTitle from '../../../layout/BoardTitle';
import PreviewProfile from '../../../layout/PreviewProfile';
import PreviewBoard from '../../../layout/PreviewBoard';
import { dummyRealtime } from '../../../components/dummyData';

const RealTimeBoardWraaper = styled.div`
    width: auto;
    margin: 10px;
    height: auto;
    box-sizing: border-box;
`;

const RealTimeBoard = () => {
    return (
        <RealTimeBoardWraaper className="board-wrapper">
            <BoardTitle more={false}>실시간 인기 글</BoardTitle>
            {dummyRealtime.map((v, index) => (
                <>
                    <PreviewProfile
                        key={v.index}
                        nickname={v.nick}
                        date={v.date}
                    />
                    <PreviewBoard
                        key={v.contents}
                        title={v.title}
                        contents={v.contents}
                        category={v.category}
                        like={v.like}
                        comments={v.comments}
                    />
                </>
            ))}
        </RealTimeBoardWraaper>
    );
};

export default RealTimeBoard;

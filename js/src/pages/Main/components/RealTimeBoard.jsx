import React from 'react';
import styled from 'styled-components';
import BoardBox from '../../../components/BoardBox';
import BoardTitle from '../../../layout/BoardTitle';
import PreviewProfile from '../../../layout/PreviewProfile';
import PreviewBoard from '../../../layout/PreviewBoard';
import { dummyRealtime } from '../../../components/dummyData';

const RealTimeBoardWraaper = styled.div`
    width: 100%;
    padding: 10px;
    height: auto;
`;

const RealTimeBoard = () => {
    return (
        <RealTimeBoardWraaper>
            <BoardBox>
                <BoardTitle more={false}>실시간 인기 글</BoardTitle>
                {dummyRealtime.map((v) => (
                    <>
                        <PreviewProfile
                            key={v.title}
                            nickname={v.nick}
                            date={v.date}
                        />
                        <PreviewBoard
                            title={v.title}
                            contents={v.contents}
                            category={v.category}
                            like={v.like}
                            comments={v.comments}
                        />
                    </>
                ))}
            </BoardBox>
        </RealTimeBoardWraaper>
    );
};

export default RealTimeBoard;

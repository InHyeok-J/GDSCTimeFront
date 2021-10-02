import React from 'react';
import styled from 'styled-components';
import BoardTitle from '../../../layout/BoardTitle';
import { dummyHot } from '../../../components/dummyData';
import PreviewOnly from '../../../layout/PreviewOnly';

const PopularWrapper = styled.div`
    width: auto;
    height: auto;
    box-sizing: border-box;
    margin: 10px;
`;

const Popular = () => {
    return (
        <PopularWrapper className="board-wrapper">
            <BoardTitle more={true}>HOT 게시글</BoardTitle>
            {dummyHot.map((v) => (
                <PreviewOnly
                    key={v.title}
                    title={v.title}
                    date={v.date}
                    like={v.like}
                    comments={v.comments}
                />
            ))}
        </PopularWrapper>
    );
};

export default Popular;

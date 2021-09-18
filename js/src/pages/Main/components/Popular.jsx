import React from 'react';
import styled from 'styled-components';
import BoardBox from '../../../components/BoardBox';
import BoardTitle from '../../../layout/BoardTitle';
import { dummyHot } from '../../../components/dummyData';
import PreviewOnly from '../../../layout/PreviewOnly';

const PopularWrapper = styled.div`
    width: 100%;
    padding: 10px;
    height: auto;
    box-sizing: border-box;
`;

const Popular = () => {
    console.log(dummyHot);
    return (
        <PopularWrapper>
            <BoardBox>
                <BoardTitle more={true}>HOT 게시글</BoardTitle>
                {dummyHot.map((v) => (
                    <PreviewOnly
                        key={v.key}
                        title={v.title}
                        date={v.date}
                        like={v.like}
                        comments={v.comments}
                    />
                ))}
            </BoardBox>
        </PopularWrapper>
    );
};

export default Popular;

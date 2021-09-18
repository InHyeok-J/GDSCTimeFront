import React from 'react';
import styled from 'styled-components';
import BoardBox from '../../../components/BoardBox';
import BoardTitle from '../../../layout/BoardTitle';
import BoardBody from '../../../layout/BoardBody';
import { dummyMyboard } from '../../../components/dummyData';

const MyBoardWraaper = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
`;

const MyBoard = () => {
    return (
        <MyBoardWraaper>
            <BoardBox size="100">
                <BoardTitle more={true}>즐겨찾는 게시판</BoardTitle>
                {dummyMyboard.map((v) => (
                    <BoardBody
                        category={v.category}
                        title={v.title}
                        key={v.title}
                    />
                ))}
            </BoardBox>
        </MyBoardWraaper>
    );
};

export default MyBoard;

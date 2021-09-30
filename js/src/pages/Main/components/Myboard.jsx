import React from 'react';
import styled from 'styled-components';
import BoardTitle from '../../../layout/BoardTitle';
import BoardBody from '../../../layout/BoardBody';
import { dummyMyboard } from '../../../components/dummyData';

const MyBoardWraaper = styled.div`
    width: auto;
    height: auto;
    margin: 10px;
`;

const MyBoard = () => {
    return (
        <MyBoardWraaper className="board-wrapper">
            <BoardTitle more={true}>즐겨찾는 게시판</BoardTitle>
            {dummyMyboard.map((v) => (
                <BoardBody
                    category={v.category}
                    title={v.title}
                    key={v.title}
                />
            ))}
        </MyBoardWraaper>
    );
};

export default MyBoard;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardTitle from '../../../layout/BoardTitle';
import BoardBody from '../../../layout/BoardBody';
import { dummyMyboard } from '../../../components/dummyData';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getMainMyBoardAction } from '../../../module/main';
import { LocalStorageMapper } from '../../../utils/category';
const MyBoardWraaper = styled.div`
    width: auto;
    height: auto;
    margin: 10px;
`;

const MyBoard = () => {
    const dispatch = useDispatch();
    const [boardSetting, SetBoardSetting] = useState(false);
    const { mainmyboard } = useSelector((state) => state.main);
    let myBoardSetting;
    useEffect(async () => {
        await dispatch(getMainMyBoardAction());
    }, []);

    useEffect(async () => {
        myBoardSetting = window.localStorage.getItem('boardSetting');
        const jsonSetting = JSON.parse(myBoardSetting);
        SetBoardSetting(jsonSetting);
    }, []);
    if (!mainmyboard) return <div>loading..</div>;
    return (
        <MyBoardWraaper className="board-wrapper">
            <BoardTitle more={true} to="board">
                즐겨찾는 게시판
            </BoardTitle>
            {mainmyboard.map((v) => {
                for (var k in boardSetting) {
                    if (
                        boardSetting[k] === true &&
                        LocalStorageMapper[k] === v.board_category_id
                    ) {
                        return (
                            <BoardBody
                                category={v.board_category_id}
                                title={v.title}
                                key={v.id}
                            />
                        );
                    }
                }
            })}
        </MyBoardWraaper>
    );
};

export default MyBoard;

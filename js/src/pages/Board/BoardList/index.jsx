import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../components/Colors';
import { dummyBoard } from '../../../components/dummyData';
import ArrowTitle from '../../../layout/ArrowTitle';
import PreviewBoard from '../../../layout/PreviewBoard';
import pencilImg from '../../../assets/icon/pencil.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import board, { getBoardListAction } from '../../../module/board';
import { CategoryMapper } from '../../../utils/category';
import NotDateText from '../../../components/NotDateText';
import PreviewProfile from '../../../layout/PreviewProfile';

const BoardListPageWrapper = styled.div`
    width: 100%;
    padding: 0px 10px 50px 10px;
    box-sizing: border-box;
    height: auto;
    .board-category {
        font-size: 0.8rem;
    }
    .board-category > div {
        font-size: 0.8rem;
        font-weight: 400;
        color: ${COLORS.grey_text};
    }
    .board-list-block {
        a {
            display: inline-block;
            width: 100%;
            border-bottom: 1px solid ${COLORS.grey_400};
        }
    }
    .board-post-link {
        width: 80px;
        height: 35px;
        background-color: ${COLORS.grey_300};
        text-align: center;
        border-radius: 15px;
        a {
            display: block;
            margin-top: 8px;
            font-size: 0.7rem;
            font-weight: bold;
        }
        img {
            position: relative;
            top: 2px;
            right: 3px;
            width: 15px;
        }
    }
`;

const BoardListPage = ({ match }) => {
    const category = match.params.id;
    const dispatch = useDispatch();
    const { boardlist } = useSelector((state) => state.board);

    useEffect(async () => {
        await dispatch(getBoardListAction(category));
    }, []);
    console.log(boardlist);

    if (!boardlist) return <div>데이터받아오는중...</div>;

    return (
        <BoardListPageWrapper>
            <ArrowTitle search="search" to="/board">
                <div className="board-category">
                    {CategoryMapper[category]}
                    <div>GDDS</div>
                </div>
            </ArrowTitle>
            <div className="board-list-block">
                {boardlist.length >= 1 ? (
                    boardlist.map((board) => (
                        <Link to={`/board/detail/${board.id}`}>
                            <PreviewBoard
                                key={board.board_category_id}
                                className="preview-board"
                                title={board.title}
                                contents={board.content}
                                like={board.like_num}
                                comments={board.comment_num}
                            />
                        </Link>
                    ))
                ) : (
                    <NotDateText />
                )}
            </div>

            <div className="board-post-link fixed-button">
                <Link to={`/board/post/${category}`}>
                    <img src={pencilImg} alt="pencilimg" />
                    글쓰기
                </Link>
            </div>
        </BoardListPageWrapper>
    );
};

export default BoardListPage;

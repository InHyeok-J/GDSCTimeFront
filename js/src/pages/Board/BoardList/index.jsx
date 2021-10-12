import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../components/Colors';
import { dummyBoard } from '../../../components/dummyData';
import ArrowTitle from '../../../layout/ArrowTitle';
import PreviewBoard from '../../../layout/PreviewBoard';
import pencilImg from '../../../assets/icon/pencil.svg';
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

const BoardListPage = () => {
    return (
        <BoardListPageWrapper>
            <ArrowTitle search="search">
                <div className="board-category">
                    어떤 게시판<div>GDDS</div>
                </div>
            </ArrowTitle>
            <div className="board-list-block">
                {dummyBoard.map((board) => (
                    <Link to={`/board/detail/${board.id}`}>
                        <PreviewBoard
                            key={board.id}
                            className="preview-board"
                            title={board.title}
                            contents={board.contents}
                            like={board.like}
                            comments={board.comments}
                        />
                    </Link>
                ))}
            </div>

            <div className="board-post-link fixed-button">
                <Link to="/board/post">
                    <img src={pencilImg} alt="pencilimg" />
                    글쓰기
                </Link>
            </div>
        </BoardListPageWrapper>
    );
};

export default BoardListPage;

import React from 'react';
import styled from 'styled-components';
import likeImg from '../assets/icon/like.png';
import commentImg from '../assets/icon/comment.png';
import { COLORS } from '../components/Colors';

const PreviewBoardWrapper = styled.div`
    height: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    .title {
        font-size: 0.9rem;
    }
    .contents {
        font-size: 0.8rem;
        font-weight: 200;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .category {
        color: ${COLORS.grey_text};
        font-size: 0.8rem;
    }
    .category-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img {
        width: 9px;
        height: 9px;
        margin-right: 5px;
    }
    .like {
        color: ${COLORS.red};
        margin-right: 10px;
        font-size: 0.7rem;
    }
    .comments {
        font-size: 0.7rem;
        color: ${COLORS.blue};
        width: auto;
    }
    div + div {
        margin-top: 5px;
    }
`;

const PreviewBoard = ({ title, contents, category, like, comments }) => {
    return (
        <PreviewBoardWrapper>
            <div className="title">{title}</div>
            <div className="contents">{contents}</div>
            <div className="category-block">
                <span className="category">{category}</span>
                <span>
                    <span className="like">
                        <img src={likeImg} alt="like" />
                        {like}
                    </span>
                    <span className="comments">
                        <img src={commentImg} alt="comments" />
                        {comments}
                    </span>
                </span>
            </div>
        </PreviewBoardWrapper>
    );
};

export default PreviewBoard;

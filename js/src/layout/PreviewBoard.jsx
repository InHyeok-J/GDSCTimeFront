import React from 'react';
import styled from 'styled-components';
import likeImg from '../assets/icon/like.png';
import commentImg from '../assets/icon/comment.png';
import { COLORS } from '../components/Colors';

const PreviewBoardWrapper = styled.div`
    height: 100px;
    .title {
        font-size: 1.1rem;
    }
    .contents {
        font-size: 0.9rem;
        font-weight: 200;
    }
    .category {
        color: ${COLORS.grey_text};
    }
    .category-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img {
        width: 12px;
        height: 12px;
    }
    .like {
        color: ${COLORS.red};
    }
    .comments {
        color: ${COLORS.blue};
        width: auto;
        height: 50px;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
    }
    div + div {
        margin-top: 10px;
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

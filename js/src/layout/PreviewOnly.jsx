import React from 'react';
import styled from 'styled-components';
import likeImg from '../assets/icon/like.png';
import commentImg from '../assets/icon/comment.png';
import { COLORS } from '../components/Colors';

const PreviewOnlyWrapper = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 20px;
    .date {
        color: ${COLORS.grey_text};
    }
    .title {
        font-size: 1rem;
    }
    .like-comments-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img {
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }
    .like {
        color: ${COLORS.red};
        margin-right: 10px;
    }
    .comments {
        color: ${COLORS.blue};
        width: auto;
    }
    div + div {
        margin-top: 5px;
    }
`;

const PreviewOnly = ({ title, date, like, comments }) => {
    return (
        <PreviewOnlyWrapper>
            <div className="title">{title}</div>
            <div className="like-comments-block">
                <span className="date">{date}</span>
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
        </PreviewOnlyWrapper>
    );
};

export default PreviewOnly;

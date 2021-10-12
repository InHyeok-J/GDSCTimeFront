import React from 'react';
import styled from 'styled-components';
import likeImg from '../assets/icon/like.png';
import commentImg from '../assets/icon/comment.png';
import { COLORS } from '../components/Colors';
import { DateChangeHour } from '../utils/dateChange';

const PreviewOnlyWrapper = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 20px;
    .date {
        font-size: 0.7rem;
        color: ${COLORS.grey_text};
    }
    .title {
        font-size: 0.9rem;
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
    .like-comments {
        width: auto;
        display: flex;
    }
    .like {
        color: ${COLORS.red};
        margin-right: 10px;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
    }
    .comments {
        font-size: 0.8rem;
        display: flex;
        align-items: center;
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
                <span className="date">{DateChangeHour(date)}</span>
                <span className="like-comments">
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

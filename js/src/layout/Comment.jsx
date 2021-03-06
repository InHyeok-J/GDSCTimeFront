import React, { useState } from 'react';
import styled from 'styled-components';
import profileImg from '../assets/img/temp.png';
import likeImg from '../assets/icon/like.png';
import moreImg from '../assets/icon/more.svg';
import Modal from 'react-modal';
import { DateChange } from '../utils/dateChange';
import { COLORS } from '../components/Colors';
const CommentWrapper = styled.div`
    border-top: 1px solid ${COLORS.grey_400};
    padding: 10px;
    .comment-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .comment-profile {
        img {
            border-radius: 5px;
            width: 21px;
            margin-right: 5px;
        }
        display: flex;
        align-items: center;
        span {
            font-size: 0.8rem;
            font-weight: bold;
        }
    }
    .comment-like {
        padding-left: 5px;
        font-size: 0.75rem;
        img {
            padding: 0 3px;
            width: 10px;
            height: 10px;
        }
        color: ${COLORS.red};
    }
    .comment-like-more {
        width: 50px;
        padding: 3px;
        border-radius: 7px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: ${COLORS.grey_300};
        img {
            width: 10px;
            filter: contrast(0.05);
            cursor: pointer;
        }
        span {
            color: ${COLORS.grey_text};
            font-size: 10px;
        }
    }
    .comment-contents {
        padding: 5px 0px;
        font-weight: 400;
        font-size: 0.7rem;
    }
    .comment-date {
        font-weight: 400;
        font-size: 0.6rem;
        color: ${COLORS.grey_text};
    }
`;
const NicknameSpan = styled.span`
    color: ${(props) => (props.isOwner ? COLORS.green : 'black')};
`;
const Comment = ({
    likeNum,
    contents,
    date,
    nickname,
    onClickHandler,
    id,
    isOwner,
    commentNicknameArray,
    userId,
}) => {
    const [isModal, setIsModal] = useState(false);

    const onModalOpen = () => {
        setIsModal(true);
    };

    const onModalClose = () => {
        setIsModal(false);
    };
    let finalNickname;
    if (isOwner) finalNickname = nickname + `(?????????)`;
    else if (nickname === '??????') {
        for (let key in commentNicknameArray) {
            if (commentNicknameArray[key].userId === userId) {
                finalNickname = commentNicknameArray[key].changeNickname;
            }
        }
    } else {
        finalNickname = nickname;
    }

    return (
        <CommentWrapper>
            <div className="comment-top">
                <span className="comment-profile">
                    <img src={profileImg} alt="profile" />
                    <NicknameSpan isOwner={isOwner}>
                        {finalNickname}
                    </NicknameSpan>
                </span>
                <span className="comment-like-more">
                    <img
                        src={likeImg}
                        alt="like"
                        onClick={() => onClickHandler(2, id)}
                    />
                    <span>|</span>
                    <img src={moreImg} onClick={onModalOpen} alt="more" />
                </span>
            </div>
            <div className="comment-contents">{contents}</div>
            <div className="comment-date">
                {DateChange(date)}
                {likeNum >= 1 ? (
                    <span className="comment-like">
                        <img src={likeImg} alt="like" />
                        {likeNum ? likeNum : 0}
                    </span>
                ) : (
                    <></>
                )}
            </div>

            <Modal
                isOpen={isModal}
                style={modalStyle}
                onRequestClose={onModalClose}
            >
                <div onClick={() => alert('???????????????')}>?????? ?????????</div>
            </Modal>
        </CommentWrapper>
    );
};

export default Comment;
const modalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
        width: '300px',
        height: '20px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
    },
};

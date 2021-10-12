import React, { useCallback } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../components/Colors';
import ArrowTitle from '../../../layout/ArrowTitle';
import PreviewBoardProfile from '../../../layout/PreviewBoardProfile';
import likeImg from '../../../assets/icon/like.png';
import commentImg from '../../../assets/icon/comment.png';
import Comment from '../../../layout/Comment';
import { dummyPost } from '../../../components/dummyData';
import useInput from '../../../hooks/useInput';
import checkedImg from '../../../assets/vector/checked.svg';
import sendImg from '../../../assets/icon/send.png';

const BoardDetailPageWrapper = styled.div`
    width: 100%;
    padding: 0px;
    box-sizing: border-box;
    .padding-container {
        padding: 0px 10px 50px 10px;
    }
    .board-category {
        font-size: 0.8rem;
    }
    .board-category > div {
        font-size: 0.8rem;
        font-weight: 400;
        color: ${COLORS.grey_text};
    }
    .post-container {
        padding: 5px 0px 30px 0px;
    }
    .post-title {
        margin-bottom: 10px;
        font-size: 1.1rem;
    }
    .post-contents {
        font-size: 0.8rem;
    }
    .like-comments-block {
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .like-comments {
        width: auto;
        display: flex;
        img {
            width: 12px;
            height: 12px;
            margin-right: 5px;
        }
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
    .like-button {
        margin-top: 10px;
        img {
            width: 10px;
            position: relative;
            right: 1px;
        }
        padding: 8px;
        color: ${COLORS.grey_600};
        font-size: 0.7rem;
        border-radius: 10px;
        background-color: ${COLORS.grey_light};
    }
    .comment-wrapper {
        width: 90%;
        margin: 0 auto;
        height: auto;
        max-width: 450px;
    }
    .comment {
        position: fixed;
        bottom: 8px;
        display: flex;
        justify-content: space-around;
        background: ${COLORS.grey_300};
        width: inherit;
        max-width: inherit;
        height: 40px;
        border-radius: 10px;
        input {
            height: 40px;
            width: 80%;
            box-sizing: border-box;
            border-style: none;
            padding: 0px;
            background: ${COLORS.grey_300};
            font-size: 14px;
        }
        input[type='checkbox'] {
            appearance: none;
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 100%;
            border: 1px solid ${COLORS.grey_400};
            cursor: pointer;
        }
        input[type='checkbox']:checked {
            width: 12px;
            height: 12px;
            background: url(${checkedImg});
            background-size: contain;
            border: none;
        }
        input:focus {
            outline: none;
        }
        button {
            img {
                width: 15px;
            }
            width: 70px;
            text-align: center;
            padding: 8px;
            height: 40px;
            box-sizing: border-box;
        }
    }
`;

const BoardDetailPage = () => {
    const [comment, onChangeComment] = useInput('');
    const [anonymity, , setAnonymity] = useInput(false);
    const onAnonymity = useCallback(
        (e) => {
            setAnonymity(!anonymity);
        },
        [anonymity],
    );

    return (
        <BoardDetailPageWrapper>
            <div className="padding-container">
                <ArrowTitle search="search">
                    <div className="board-category">
                        어떤 게시판<div>GDDS</div>
                    </div>
                </ArrowTitle>
                <PreviewBoardProfile date={dummyPost.date} />
                <div className="post-container">
                    <div className="post-title">{dummyPost.title}</div>
                    <div className="post-contents">{dummyPost.contents}</div>
                    <div className="like-comments-block ">
                        <span className="like-comments">
                            <span className="like">
                                <img src={likeImg} alt="like" />
                                {dummyPost.like}
                            </span>
                            <span className="comments">
                                <img src={commentImg} alt="comments" />
                                {dummyPost.comments.length}
                            </span>
                        </span>
                    </div>
                    <button className="like-button">
                        <img src={likeImg} alt="like" />
                        공감
                    </button>
                </div>
                <div className="comments-container">
                    {dummyPost.comments.map((comments) => (
                        <Comment
                            key={comments.id}
                            contents={comments.contents}
                            date={comments.date}
                        />
                    ))}
                </div>
            </div>

            <div className="comment-wrapper">
                <div className="comment">
                    <button onClick={onAnonymity}>
                        <input
                            type="checkbox"
                            name="anonymity"
                            checked={anonymity}
                        />
                        <Label htmlFor="anonymity" anonymity={anonymity}>
                            익명
                        </Label>
                    </button>
                    <input
                        value={comment}
                        placeholder="댓글을 입력해주세요"
                        onChange={onChangeComment}
                    />
                    <button>
                        <img src={sendImg} alr="send" />
                    </button>
                </div>
            </div>
        </BoardDetailPageWrapper>
    );
};

export default BoardDetailPage;

const Label = styled.label`
    font-size: 0.8rem;
    color: ${(props) => (props.anonymity ? COLORS.red : COLORS.grey_text)};
`;

import React, { useCallback, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import {
    getBoardDetailAction,
    getBoardCommentAction,
    postCommentAction,
    initPostComment,
    likeAction,
} from '../../../module/board';
import { useSelector } from 'react-redux';
import { DateChange } from '../../../utils/dateChange';
import { CategoryMapper } from '../../../utils/category';
import { useHistory } from 'react-router';

const BoardDetailPage = ({ match }) => {
    const postId = match.params.id;
    const [comment, onChangeComment, setComment] = useInput('');
    const [anonymity, , setAnonymity] = useInput(false);
    const { boarddetail, boardcomment, postcomment, postlike } = useSelector(
        (state) => state.board,
    );
    const dispatch = useDispatch();
    const history = useHistory();
    const onAnonymity = useCallback(
        (e) => {
            setAnonymity(!anonymity);
        },
        [anonymity],
    );

    useEffect(async () => {
        await dispatch(getBoardDetailAction(postId));
        await dispatch(getBoardCommentAction(postId));
    }, [postcomment, postlike]);

    useEffect(() => {
        return async () => {
            await dispatch(initPostComment());
        };
    }, []);

    const onSubmitComment = useCallback(async () => {
        if (comment == '') {
            alert('댓글을 입력해');
            return false;
        }
        try {
            await dispatch(
                postCommentAction({
                    board_id: postId,
                    is_secret: anonymity,
                    content: comment,
                }),
            );
            setComment('');
        } catch (err) {
            console.error(err);
        }
    }, [comment]);

    const onLikeHandler = useCallback(async (categoryId, refId) => {
        await dispatch(
            likeAction({
                category_id: categoryId,
                ref_id: refId,
            }),
        )
            .then((response) => alert('좋아요성공!'))
            .catch((err) => {
                console.log(err.response.data.message);
                alert(err.response.data.message);
            });
    });

    if (!boarddetail || !boardcomment) return <div>데이터 받아오는중...</div>;
    //방장이 아니고 익명인 댓글 가져오기
    let comments = boardcomment.filter((data) => {
        return data.owner === false && data.nickname === '익명';
    });
    // 중복 제거
    let commentNickname = [];
    let count = 0;

    for (let key in comments) {
        if (!commentNickname.includes(comments[key].user_id))
            commentNickname.push(comments[key].user_id);
    }
    for (let key in commentNickname) {
        commentNickname[key] = {
            userId: commentNickname[key],
            changeNickname: `익명${++count}`,
        };
    }
    return (
        <BoardDetailPageWrapper>
            <div className="padding-container">
                <ArrowTitle
                    search="search"
                    to={`/board/list/${boarddetail.board_category_id}`}
                >
                    <div className="board-category">
                        {CategoryMapper[boarddetail.board_category_id]}
                        <div>GDDS</div>
                    </div>
                </ArrowTitle>
                <PreviewBoardProfile
                    date={DateChange(boarddetail.created_at)}
                    nickname={boarddetail.nickname}
                />
                <div className="post-container">
                    <div className="post-title">{boarddetail.title}</div>
                    <div className="post-contents">{boarddetail.content}</div>
                    <div className="like-comments-block ">
                        <span className="like-comments">
                            <span className="like">
                                <img src={likeImg} alt="like" />
                                {boarddetail.like_num}
                            </span>
                            <span className="comments">
                                <img src={commentImg} alt="comments" />
                                {boarddetail.comment_num}
                            </span>
                        </span>
                    </div>
                    <button
                        className="like-button"
                        onClick={() => onLikeHandler(1, boarddetail.id)}
                    >
                        <img src={likeImg} alt="like" />
                        공감
                    </button>
                </div>
                <div className="comments-container">
                    {boardcomment.map((comments) => (
                        <Comment
                            onClickHandler={onLikeHandler}
                            nickname={comments.nickname}
                            commentNicknameArray={commentNickname}
                            key={comments.id}
                            id={comments.id}
                            userId={comments.user_id}
                            isOwner={comments.owner}
                            likeNum={comments.like_num}
                            contents={comments.content}
                            date={comments.created_at}
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
                            readOnly
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
                    <button onClick={onSubmitComment}>
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

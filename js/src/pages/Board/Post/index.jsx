import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import xVectorImg from '../../../assets/vector/xVector.svg';
import cameraImg from '../../../assets/icon/camera.svg';
import { COLORS } from '../../../components/Colors';
import checkedImg from '../../../assets/vector/checked.svg';
import useInput from '../../../hooks/useInput';

const PostPageWrapper = styled.div`
    padding: 15px 10px 50px 10px;
    .post-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
            width: 15px;
            cursor: pointer;
        }
        span {
            margin-left: 20px;
        }
        button {
            font-size: 0.7rem;
            text-align: center;
            width: 30px;
            color: #ffffff;
            background-color: ${COLORS.red};
            padding: 5px;
            border-radius: 15px;
        }
    }
    .post-contents {
        input {
            padding: 20px 5px 10px 5px;
            display: block;
            width: 100%;
            height: 30px;
            border-style: none;
            border-bottom: 1px solid ${COLORS.grey_text};
            outline: unset;
        }
        input::placeholder {
            font-weight: 600;
            font-size: 1.2rem;
        }
        textarea {
            padding: 20px 5px 10px 5px;
            width: 100%;
            height: auto;
            min-height: 500px;
        }
    }
    .fixed-wrapper {
        width: 90%;
        margin: 0 auto;
        height: auto;
        max-width: 450px;
    }
    .post-bottom {
        display: flex;
        position: fixed;
        width: inherit;
        max-width: inherit;
        bottom: 8px;
        justify-content: space-between;
        align-items: center;
        img {
            width: 20px;
            cursor: pointer;
        }
    }
    .anonymity-container {
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
    }
`;
const PostPage = () => {
    const [anonymity, , setAnonymity] = useInput(false);
    const history = useHistory();
    const imageInput = useRef();

    const onAnonymity = useCallback(
        (e) => {
            setAnonymity(!anonymity);
        },
        [anonymity],
    );

    const onImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <PostPageWrapper>
            <div className="post-top">
                <div>
                    <img
                        src={xVectorImg}
                        alt="xbutton"
                        onClick={() => history.goBack()}
                    />
                    <span>글 쓰기</span>
                </div>
                <button>완료</button>
            </div>
            <div className="post-contents">
                <input type="text" placeholder="제목" />
                <textarea placeholder="내용을 입력하세요" />
            </div>
            <div className="fixed-wrapper">
                <div className="post-bottom">
                    <img src={cameraImg} alt="camera" onClick={onImageUpload} />
                    <input
                        type="file"
                        name="image"
                        multiple
                        hidden
                        ref={imageInput}
                        onChange={null}
                    />
                    <div className="anonymity-container" onClick={onAnonymity}>
                        <input
                            type="checkbox"
                            alt="익명"
                            name="anonymity"
                            checked={anonymity}
                        />
                        <Label htmlFor="anonymity" anonymity={anonymity}>
                            익명
                        </Label>
                    </div>
                </div>
            </div>
        </PostPageWrapper>
    );
};

export default PostPage;

const Label = styled.label`
    font-size: 0.8rem;
    margin-left: 5px;
    color: ${(props) => (props.anonymity ? COLORS.red : COLORS.grey_text)};
`;

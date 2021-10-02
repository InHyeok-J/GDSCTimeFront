import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUpAction, signUpCleanAction } from '../../module/user';
import MainButton from '../../components/button/MainButton';
import MainInput from '../../components/input/MainInput';
import useInput from '../../hooks/useInput';
import { checkPassword } from '../../utils/RegExpCheck';
import XButtonTitle from '../../layout/XButtonTitle';

const SignUpWrapper = styled.div`
    padding: 30px 16px;

    .sub-text {
        font-size: 0.8rem;
        font-weight: 100;
        margin-bottom: 10px;
    }
    .input-block {
        margin-bottom: 10px;
    }
    .warning-message {
        font-size: 0.6rem;
        font-weight: 500;
        color: red;
    }
    .password-message {
        font-size: 0.6rem;
        font-weight: 500;
        color: red;
    }
`;

const SignUpPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.user);
    const [id, onChangeId] = useInput(null);
    const [password, , setPassword] = useInput(null);
    const [passwordCheck, , setPasswordCheck] = useInput(null);
    const [name, onChangeName] = useInput(null);
    const [email, , setEmail] = useInput(null);
    const [nickname, onChangeNickname] = useInput(null);
    const [major, onChangeMajor] = useInput(null);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorPasswordCheck, setErrorPasswordCheck] = useState(false);
    const [lastPasswordCheck, setLastPasswordCheck] = useState(false);

    const onChangePassword = useCallback(
        (e) => {
            setPassword(e.target.value);
            setLastPasswordCheck(false);
            if (!checkPassword(e.target.value)) {
                setErrorPassword((pre) => true);
            } else {
                setErrorPassword(() => false);
            }

            if (e.target.value === passwordCheck) {
                setErrorPasswordCheck(false);
            } else {
                setErrorPasswordCheck(true);
            }
        },
        [password, passwordCheck],
    );

    const onChangePasswordCheck = useCallback(
        (e) => {
            setLastPasswordCheck(false);
            setPasswordCheck(e.target.value);
            if (password === e.target.value) {
                setErrorPasswordCheck(false);
            } else {
                setErrorPasswordCheck(true);
            }
        },
        [passwordCheck, password],
    );

    const onChangeEmail = useCallback(
        (e) => {
            setEmail(e.target.value);
        },
        [email],
    );

    const onSignUp = async (e) => {
        if (errorPassword || errorPasswordCheck) {
            return setLastPasswordCheck(true);
        }
        if (name && id && email && nickname && password && major) {
            try {
                await dispatch(
                    signUpAction({
                        name,
                        userId: id,
                        email,
                        nickname,
                        password,
                        major,
                    }),
                );
                history.push('/login');
            } catch (err) {
                console.error(error.response.data.message);
                alert(error.response.data.message);
            }
        } else {
            return alert('값을 입력해주세요');
        }
    };
    const onSignUpKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSignUp();
        }
    };

    if (user) {
        alert('로그인한 유저는 접근하실 수 없습니다.');
        history.push('/');
    }
    return (
        <SignUpWrapper>
            <XButtonTitle title="회원가입" to="login" />
            <div className="input-block">
                <div className="sub-text">아이디</div>
                <MainInput
                    value={id || ''}
                    type="text"
                    onChange={onChangeId}
                    placeholder="아이디를 입력해주세요"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">비밀번호</div>
                <MainInput
                    value={password || ''}
                    type="password"
                    onChange={onChangePassword}
                    placeholder="비밀번호를 입력해주세요"
                />
                {password ? (
                    <></>
                ) : (
                    <div className="password-message">
                        비밀번호는 영어 숫자 특수문자가 모두 포함된
                        8자이상이여야 합니다.
                    </div>
                )}
                {errorPassword ? (
                    <div className="warning-message">틀렸습니다.</div>
                ) : (
                    <></>
                )}
            </div>
            <div className="input-block">
                <div className="sub-text">비밀번호 확인</div>
                <MainInput
                    value={passwordCheck || ''}
                    type="password"
                    onChange={onChangePasswordCheck}
                    placeholder="비밀번호 다시를 입력해주세요"
                />
                {errorPasswordCheck && (
                    <div className="warning-message">
                        비밀번호가 일치하지 않습니다.
                    </div>
                )}
            </div>
            <div className="input-block">
                <div className="sub-text">이름</div>
                <MainInput
                    value={name || ''}
                    type="text"
                    onChange={onChangeName}
                    placeholder="이름을 입력해주세요"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">이메일</div>
                <MainInput
                    value={email || ''}
                    type="email"
                    onChange={onChangeEmail}
                    placeholder="이메일을 입력해주세요"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">닉네임</div>
                <MainInput
                    value={nickname || ''}
                    type="text"
                    onChange={onChangeNickname}
                    placeholder="닉네임을 입력해주세요"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">전공</div>
                <MainInput
                    value={major || ''}
                    type="text"
                    onChange={onChangeMajor}
                    placeholder="전공을 입력해주세요"
                    onKeyPress={onSignUpKeyPress}
                />
            </div>
            <MainButton text="회원가입" onClick={onSignUp} />
            {lastPasswordCheck && (
                <div className="warning-message">
                    비밀번호를 다시 확인해주세요
                </div>
            )}
        </SignUpWrapper>
    );
};

export default SignUpPage;

import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
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
    const [id, onChangeId] = useInput('');
    const [password, , setPassword] = useInput(null);
    const [passwordCheck, , setPasswordCheck] = useInput('');
    const [name, onChangeName] = useInput('');
    const [email, , setEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [major, onChangeMajor] = useInput('');
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorPasswordCheck, setErrorPasswordCheck] = useState(false);

    const onChangePassword = useCallback(
        (e) => {
            setPassword(e.target.value);

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

    useEffect(() => {
        // console.log(password);
        // console.log(errorPassword);
        console.log(errorPasswordCheck);
    }, [errorPassword, password, errorPasswordCheck]);

    return (
        <SignUpWrapper>
            <XButtonTitle title="회원가입" to="login" />
            <div className="input-block">
                <div className="sub-text">아이디</div>
                <MainInput
                    value={id}
                    type="text"
                    onChange={onChangeId}
                    placeholder="아이디를 입력해주세요"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">비밀번호</div>
                <MainInput
                    value={password || ''}
                    type="text"
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
                    value={passwordCheck}
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
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="이름을 입력해주세요"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">이메일</div>
                <MainInput
                    value={email}
                    type="email"
                    onChange={onChangeEmail}
                    placeholder="이메일을 입력해주세요"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">닉네임</div>
                <MainInput
                    value={nickname}
                    type="text"
                    onChange={onChangeNickname}
                    placeholder="닉네임을 입력해주세요"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">전공</div>
                <MainInput
                    value={major}
                    type="text"
                    onChange={onChangeMajor}
                    placeholder="전공을 입력해주세요"
                />
            </div>
            <MainButton text="회원가입" onClick={() => alert('회원가입')} />
        </SignUpWrapper>
    );
};

export default SignUpPage;

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../components/Colors';
import MainButton from '../../components/button/MainButton';
import MainInput from '../../components/input/MainInput';
import useInput from '../../hooks/useInput';
import { checkPassword } from '../../utils/RegExpCheck';
const SignUpWrapper = styled.div``;

const SignUpPage = () => {
    const [id, onChangeId] = useInput('');
    const [password, , setPassword] = useInput('');
    const [passwordCheck, onPasswordCheckHandler, setPasswordCheck] =
        useInput('');
    const [name, onChangeName] = useInput('');
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [major, onChangeMajor] = useInput('');
    const [errorNum, setErrorNum] = useState(true);

    const onChangePassword = useCallback(
        (e) => {
            if (!checkPassword(e.target.value)) {
                setErrorNum(true);
            } else {
                setErrorNum(false);
            }
            console.log(checkPassword(e.target.value));
            setPassword(e.target.value);
            console.log(password);
        },
        [password],
    );

    return (
        <SignUpWrapper>
            <MainInput
                value={id}
                type="text"
                onChange={onChangeId}
                placeholder="아이디를 입력해주세요"
            />
            <MainInput
                value={password}
                type="text"
                onChange={onChangePassword}
                placeholder="비밀번호를 입력해주세요"
            />
            {errorNum ? <></> : <div>틀렸습니다.</div>}
            <MainInput
                value={passwordCheck}
                type="password"
                onChange={onPasswordCheckHandler}
                placeholder="비밀번호 다시를 입력해주세요"
            />
            <MainInput
                value={name}
                type="text"
                onChange={onChangeName}
                placeholder="이름을 입력해주세요"
            />
            <MainInput
                value={email}
                type="email"
                onChange={onChangeEmail}
                placeholder="이메일을 입력해주세요"
            />
            <MainInput
                value={nickname}
                type="text"
                onChange={onChangeNickname}
                placeholder="닉네임을 입력해주세요"
            />
            <MainInput
                value={major}
                type="text"
                onChange={onChangeMajor}
                placeholder="전공을 입력해주세요"
            />
            <MainButton text="회원가입" onClick={() => alert('회원가입')} />
        </SignUpWrapper>
    );
};

export default SignUpPage;

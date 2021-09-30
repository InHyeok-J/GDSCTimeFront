import React from 'react';
import styled from 'styled-components';
import MainInput from '../../components/input/MainInput';
import MainButton from '../../components/button/MainButton';
import useInput from '../../hooks/useInput';
import logoImg from '../../assets/logo/logo.png';
import { COLORS } from '../../components/Colors';
import { Link } from 'react-router-dom';
const LoginPageWrapper = styled.div`
    padding: 30px 16px;

    .login-main {
        display: flex;
        height: 145px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .login-text {
        font-weight: 400;
        font-size: 0.7rem;
        margin-bottom: 10px;
        color: ${COLORS.grey_600};
    }
    .login-everytime {
        font-weight: 700;
        color: ${COLORS.red};
        font-size: 1.1rem;
    }
    img {
        width: 64px;
        margin-bottom: 10px;
    }
    .signup-link {
        padding: 10px 0px;
        display: inline-block;
        text-align: center;
        width: 100%;
    }
    input {
        margin-bottom: 10px;
    }
`;

const LoginPage = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    return (
        <LoginPageWrapper>
            <div className="login-main">
                <img src={logoImg} alt="logo" />
                <div className="login-text">대학 생활을 더 편하고 즐겁게</div>
                <div className="login-everytime">에브리타임</div>
            </div>
            <MainInput
                value={id}
                type="text"
                onChange={onChangeId}
                placeholder="아이디"
            />
            <MainInput
                value={password || ''}
                type="text"
                onChange={onChangePassword}
                placeholder="비밀번호"
            />
            <MainButton text="에브리타임 로그인"></MainButton>
            <Link to="/signup" className="signup-link">
                회원가입
            </Link>
        </LoginPageWrapper>
    );
};
export default LoginPage;

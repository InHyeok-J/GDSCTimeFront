import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainInput from '../../components/input/MainInput';
import MainButton from '../../components/button/MainButton';
import useInput from '../../hooks/useInput';
import logoImg from '../../assets/logo/logo.png';
import { COLORS } from '../../components/Colors';
import { Link } from 'react-router-dom';
import { loginAction, userCleanAction } from '../../module/user';

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state) => state.user);
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [focus, setFocus] = useState(false);
    const onLogin = useCallback(
        async (e) => {
            if (id && password) {
                try {
                    await dispatch(
                        loginAction({
                            userId: id,
                            password,
                        }),
                    );
                    alert('로그인 성공!');
                } catch (err) {
                    console.error(err);
                    alert('로그인을 실패했습니다!');
                }
            } else {
                alert('값을 입력해주세요.');
            }
        },
        [id, password],
    );

    const onFocus = () => {
        setFocus(true);
    };

    const onLoginKeyPress = (e) => {
        if (e.key === 'Enter') {
            onLogin();
        }
    };
    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [user]);

    return (
        <LoginPageWrapper>
            {!focus && (
                <div className="login-main">
                    <img src={logoImg} alt="logo" />
                    <div className="login-text">
                        대학 생활을 더 편하고 즐겁게
                    </div>
                    <div className="login-everytime">에브리타임</div>
                </div>
            )}
            <MainInput
                value={id}
                type="text"
                handleFocus={onFocus}
                onChange={onChangeId}
                placeholder="아이디"
            />
            <MainInput
                value={password || ''}
                type="password"
                handleFocus={onFocus}
                onChange={onChangePassword}
                placeholder="비밀번호"
                onKeyPress={onLoginKeyPress}
            />
            <MainButton text="에브리타임 로그인" onClick={onLogin}></MainButton>
            <Link to="/signup" className="signup-link">
                회원가입
            </Link>
        </LoginPageWrapper>
    );
};
export default LoginPage;
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

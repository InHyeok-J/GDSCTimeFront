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
                        user_id: id,
                        email,
                        nickname,
                        password,
                        major,
                        hp: 'test',
                    }),
                );
                history.push('/login');
            } catch (err) {
                console.error(error.response.data.message);
                alert(error.response.data.message);
            }
        } else {
            return alert('?????? ??????????????????');
        }
    };
    const onSignUpKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSignUp();
        }
    };

    if (user) {
        alert('???????????? ????????? ???????????? ??? ????????????.');
        history.push('/');
    }
    return (
        <SignUpWrapper>
            <XButtonTitle title="????????????" to="login" />
            <div className="input-block">
                <div className="sub-text">?????????</div>
                <MainInput
                    value={id || ''}
                    type="text"
                    onChange={onChangeId}
                    placeholder="???????????? ??????????????????"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">????????????</div>
                <MainInput
                    value={password || ''}
                    type="password"
                    onChange={onChangePassword}
                    placeholder="??????????????? ??????????????????"
                />
                {password ? (
                    <></>
                ) : (
                    <div className="password-message">
                        ??????????????? ?????? ?????? ??????????????? ?????? ?????????
                        8?????????????????? ?????????.
                    </div>
                )}
                {errorPassword ? (
                    <div className="warning-message">???????????????.</div>
                ) : (
                    <></>
                )}
            </div>
            <div className="input-block">
                <div className="sub-text">???????????? ??????</div>
                <MainInput
                    value={passwordCheck || ''}
                    type="password"
                    onChange={onChangePasswordCheck}
                    placeholder="???????????? ????????? ??????????????????"
                />
                {errorPasswordCheck && (
                    <div className="warning-message">
                        ??????????????? ???????????? ????????????.
                    </div>
                )}
            </div>
            <div className="input-block">
                <div className="sub-text">??????</div>
                <MainInput
                    value={name || ''}
                    type="text"
                    onChange={onChangeName}
                    placeholder="????????? ??????????????????"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">?????????</div>
                <MainInput
                    value={email || ''}
                    type="email"
                    onChange={onChangeEmail}
                    placeholder="???????????? ??????????????????"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">?????????</div>
                <MainInput
                    value={nickname || ''}
                    type="text"
                    onChange={onChangeNickname}
                    placeholder="???????????? ??????????????????"
                />
            </div>
            <div className="input-block">
                <div className="sub-text">??????</div>
                <MainInput
                    value={major || ''}
                    type="text"
                    onChange={onChangeMajor}
                    placeholder="????????? ??????????????????"
                    onKeyPress={onSignUpKeyPress}
                />
            </div>
            <MainButton text="????????????" onClick={onSignUp} />
            {lastPasswordCheck && (
                <div className="warning-message">
                    ??????????????? ?????? ??????????????????
                </div>
            )}
        </SignUpWrapper>
    );
};

export default SignUpPage;

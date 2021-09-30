import React from 'react';
import styled from 'styled-components';
import MainInput from '../../components/input/MainInput';
import MainButton from '../../components/button/MainButton';
const LoginPageWrapper = styled.div``;

const LoginPage = () => {
    return (
        <LoginPageWrapper>
            <MainInput />
            <MainInput />
            <MainButton />
        </LoginPageWrapper>
    );
};
export default LoginPage;

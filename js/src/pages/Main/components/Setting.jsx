import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../components/Colors';

const SettingWrapper = styled.div`
    width: auto;
    height: auto;
    box-sizing: border-box;
    margin: 10px;
    background-color: ${COLORS.grey_400};
    border-radius: 10px;
    padding: 10px;
    div {
        text-align: center;
        font-size: 0.8rem;
        font-weight: bold;
        cursor: pointer;
    }
`;

const Setting = () => {
    return (
        <SettingWrapper>
            <Link to="/setting">
                <div>홈 화면 설정</div>
            </Link>
        </SettingWrapper>
    );
};

export default Setting;

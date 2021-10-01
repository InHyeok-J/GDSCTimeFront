import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import xImg from '../assets/vector/xVector.svg';

const XButtonTitleWrapper = styled.div`
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 16px;
    }
`;

const XButtonTitle = ({ title, to }) => {
    return (
        <XButtonTitleWrapper>
            <div>{title}</div>
            <Link to={`/${to}`}>
                <img src={xImg} alt="xButton" />
            </Link>
        </XButtonTitleWrapper>
    );
};

export default XButtonTitle;

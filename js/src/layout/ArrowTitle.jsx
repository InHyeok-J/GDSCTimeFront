import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrowImg from '../assets/vector/arrow.svg';

const ArrowTitleWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    span {
        margin-left: 20px;
        font-weight: 500;
        display: inline-block;
    }
    a > img {
        width: 28px;
        transform: rotate(180deg);
    }
`;
const ArrowTitle = ({ to, text }) => {
    return (
        <ArrowTitleWrapper>
            <Link to={to}>
                <img src={arrowImg} alt="leftarrow" />
            </Link>
            <span>{text}</span>
        </ArrowTitleWrapper>
    );
};

export default ArrowTitle;

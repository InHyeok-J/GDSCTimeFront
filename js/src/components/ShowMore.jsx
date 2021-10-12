import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Colors';
import RightImg from '../assets/vector/vectorRight.svg';
import { Link } from 'react-router-dom';

const ShowMoreWrapper = styled.div`
    display: inline-block;
    a {
        display: flex;
        color: ${COLORS.red};
        font-size: 0.8rem;
        font-weight: 400;
    }

    img {
        width: 10px;
        position: relative;
        top: 0px;
        right: -5px;
        filter: invert(15%) sepia(24%) saturate(7448%) hue-rotate(353deg)
            brightness(103%) contrast(113%);
    }
`;

const ShowMore = ({ to, size }) => {
    return (
        <ShowMoreWrapper size={size}>
            <Link to={`/${to}`}>
                더 보기
                <img src={RightImg} alt="right" />
            </Link>
        </ShowMoreWrapper>
    );
};

export default ShowMore;

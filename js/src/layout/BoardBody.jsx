import React from 'react';
import styled from 'styled-components';
import newImg from '../assets/icon/new.svg';
import { COLORS } from '../components/Colors';

const BoardBodyWrapper = styled.div`
    height: auto;
    .title-block {
        display: inline-block;
        margin: 15px 5px 5px 0;
        font-size: 1rem;
        color: ${COLORS.black};
    }
    .text-block {
        display: inline-block;
        margin: 15px 5px 5px 0;
        font-size: 0.8rem;
        width: 70%;
        color: ${COLORS.grey_text};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        top: 5px;
    }
    .new-icon img {
        float: right;
        width: 15px;
        margin-top: 10px;
        position: relative;
        top: 5px;
    }
`;

const BoardBody = ({ category, title }) => {
    return (
        <BoardBodyWrapper>
            <span className="title-block">{category}</span>
            <span className="text-block">{title}</span>
            <span className="new-icon">
                <img src={newImg} alt="new" />
            </span>
        </BoardBodyWrapper>
    );
};

export default BoardBody;

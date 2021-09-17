import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Colors';

const BoxWrapper = styled.div`
    border-radius: 20px;
    width: object-fit;
    height: 10px;
    font-size: 0.8rem;
    font-weight: 300;
    color: ${COLORS.grey_600};
    padding: 10px;
    background-color: rgb(249, 249, 249);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;

    img {
        width: 12px;
        filter: contrast(0.5);
        position: relative;
        top: 1px;
        left: 2px;
    }
`;

const MoreGreyBox = ({ children }) => {
    return <BoxWrapper>{children}</BoxWrapper>;
};

export default MoreGreyBox;

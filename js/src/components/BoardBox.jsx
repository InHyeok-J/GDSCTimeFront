import React from 'react';
import styled, { css } from 'styled-components';

const BoxWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 20px;
    & + & {
        margin-left: 10px;
    }
`;

const BoardBox = ({ children, size }) => {
    return (
        <BoxWrapper className="board-wrapper" size={size}>
            {children}
        </BoxWrapper>
    );
};

BoardBox.defaultProps = {
    size: '100',
};
export default BoardBox;

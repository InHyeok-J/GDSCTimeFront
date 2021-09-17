import React from 'react';
import styled, { css } from 'styled-components';

const BoxWrapper = styled.div`
    box-sizing: border-box;
    ${(props) => {
        const newWidth = props.size * 5;

        return css`
            width: ${newWidth}px;
        `;
    }};
    height: auto;
    margin-left: 5px;
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

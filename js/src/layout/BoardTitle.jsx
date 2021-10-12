import React from 'react';
import styled, { css } from 'styled-components';
import ShowMore from '../components/ShowMore';

const TitleWrapper = styled.div`
    width: auto;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${(props) =>
        props.size === 'middle'
            ? css`
                  font-size: 0.9rem;
                  height: 25px;
              `
            : css`
                  font-size: 1.1.rem;
              `}
`;
const BoardTitle = ({ children, more, size, to }) => {
    return (
        <TitleWrapper size={size}>
            {children}
            {more && <ShowMore to={to} size={size} />}
        </TitleWrapper>
    );
};

export default BoardTitle;

import React from 'react';
import styled from 'styled-components';
import ShowMore from '../components/ShowMore';

const TitleWrapper = styled.div`
    width: auto;
    height: 40px;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BoardTitle = ({ children, more }) => {
    return (
        <TitleWrapper>
            {children}
            {more && <ShowMore />}
        </TitleWrapper>
    );
};

export default BoardTitle;

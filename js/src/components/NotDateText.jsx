import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Colors';

const Container = styled.div`
    text-align: center;
    padding: 10px;
    color: ${COLORS.grey_500};
`;

const NotDateText = () => {
    return <Container>아직 글이 존재하지 않습니다.</Container>;
};

export default NotDateText;

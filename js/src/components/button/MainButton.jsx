import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../Colors';

const Button = styled.button`
    width: 100%;
    height: 32px;
    background-color: ${COLORS.red};
    border-radius: 10px;
    color: white;
    font-size: 14px;
`;

const MainButton = ({ text, onClick }) => {
    return (
        <Button onClick={onClick} className="arrange-center-center">
            {text}
        </Button>
    );
};

export default MainButton;

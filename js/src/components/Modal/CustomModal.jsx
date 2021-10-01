import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../Colors';

const CustomModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .modal-text {
        font-size: 0.9rem;
        font-weight: 400;
    }
    .modal-button {
        position: absolute;
        right: 25px;
        top: 105px;
        button {
            font-size: 0.9rem;
            color: ${COLORS.red};
            margin-left: 10px;
        }
    }
`;
const CustomModal = ({
    text,
    leftBtnText,
    leftBtnFun,
    righthBtnText,
    righthBtnFun,
}) => {
    return (
        <CustomModalWrapper>
            <p className="modal-text">{text}</p>
            <div className="modal-button">
                <button onClick={leftBtnFun}>{leftBtnText}</button>
                <button onClick={righthBtnFun}>{righthBtnText}</button>
            </div>
        </CustomModalWrapper>
    );
};

export default CustomModal;

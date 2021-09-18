import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../../components/Colors';

const AlramTitleWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 15px;
    box-sizing: border-box;
    span {
        color: ${COLORS.grey_text};
        font-size: 1.5rem;
        margin-right: 15px;
        line-height: 40px;
        cursor: pointer;
    }
    ${(props) =>
        props.message
            ? css`
                  .message {
                      color: ${COLORS.black};
                      border-bottom: 3px solid ${COLORS.black};
                  }
              `
            : css`
                  .alram {
                      color: ${COLORS.black};
                      border-bottom: 3px solid ${COLORS.black};
                  }
              `}
`;

const AlarmTitle = ({
    messageRender,
    onAlarmRenderHandler,
    onMessageRenderHandler,
}) => {
    return (
        <AlramTitleWrapper message={messageRender}>
            <span onClick={onAlarmRenderHandler} className="alram">
                알림
            </span>
            <span onClick={onMessageRenderHandler} className="message">
                쪽지함
            </span>
        </AlramTitleWrapper>
    );
};

export default AlarmTitle;

import React from 'react';
import styled from 'styled-components';
import { DateChange } from '../../../utils/dateChange';
import { COLORS } from '../../../components/Colors';

const MessageItemWrapper = styled.div`
    margin-top: 25px;
    .name-date-block {
        display: flex;
        justify-content: space-between;
    }
    .name {
        font-size: 1rem;
        color: ${COLORS.black};
    }
    .date {
        font-size: 0.8rem;
        color: ${COLORS.grey_text};
    }
    .body {
        margin-top: 5px;
        height: 20px;
        color: ${COLORS.grey_600};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

const MessageItem = ({ nickname, date, body }) => {
    const name = nickname ? nickname : '익명';
    return (
        <MessageItemWrapper>
            <div className="name-date-block">
                <span className="name">{name}</span>
                <span className="date">{DateChange(date)}</span>
            </div>
            <div className="body">{body}</div>
        </MessageItemWrapper>
    );
};

export default MessageItem;

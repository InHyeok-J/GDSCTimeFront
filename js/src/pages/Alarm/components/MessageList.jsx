import React from 'react';
import styled from 'styled-components';
import { dummyMessage } from '../../../components/dummyData';
import MessageItem from './MessageItem';
const MessageListWrapper = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`;
const MessageList = () => {
    return (
        <MessageListWrapper>
            {dummyMessage.map((v) => (
                <MessageItem
                    nickname={v.nick}
                    date={v.date}
                    body={v.title}
                    key={v.title}
                />
            ))}
        </MessageListWrapper>
    );
};

export default MessageList;

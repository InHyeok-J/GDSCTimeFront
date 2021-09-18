import React, { useState } from 'react';

import AlarmTitle from './components/AlarmTitle';
import BottomNavigation from '../../layout/BottomNavigation';
import MessageList from './components/MessageList';
import AlarmList from './components/AlarmList';

const Index = () => {
    const [messageRender, setMessageRender] = useState(true);

    const onAlarmRenderHandler = () => {
        setMessageRender(false);
    };
    const onMessageRenderHandler = () => {
        setMessageRender(true);
    };

    return (
        <div>
            <AlarmTitle
                messageRender={messageRender}
                onAlarmRenderHandler={onAlarmRenderHandler}
                onMessageRenderHandler={onMessageRenderHandler}
            />
            {messageRender ? <MessageList /> : <AlarmList />}
            <BottomNavigation activeNum={3} />
        </div>
    );
};

export default Index;

import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../components/Colors';
import ArrowTitle from '../../layout/ArrowTitle';

const SettingPageWrapper = styled.div`
    input[type='checkbox'] {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        border: 1px solid ${COLORS.grey_400};
    }

    input[type='checkbox']:checked {
        width: 12px;
        height: 12px;
        border: none;
        border-radius: 100%;
        background-color: ${COLORS.red};
    }

    .input-container {
        border-radius: 5px;
        border: 1px solid ${COLORS.grey_400};
    }
`;

const SettingPage = () => {
    const [setting, setSetting] = useState({
        isMine: false,
        isRealTime: false,
        isHot: false,
    });

    useEffect(() => {
        const storage = window.localStorage.getItem('setting');
        const JsonStorage = JSON.parse(storage);
        setSetting(JsonStorage);
    }, []);

    const onChangeSetting = useCallback(
        (e) => {
            window.localStorage.setItem('setting', JSON.stringify(setting));

            setSetting({
                ...setting,
                [e.target.name]: e.target.checked,
            });
            console.log(e.target.checked);
            console.log(
                '로컬 스토리지',
                window.localStorage.getItem('setting'),
            );
        },
        [setting],
    );

    return (
        <SettingPageWrapper>
            <ArrowTitle to="/" text="홈 화면 설정" />
            <div className="board-wrapper ">
                <div>
                    <input
                        type="checkbox"
                        name="isMine"
                        id="isMine"
                        checked={setting.isMine}
                        onChange={onChangeSetting}
                    />
                    <label htmlFor="isMine">즐겨찾는 게시판</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="isRealTime"
                        id="isRealTime"
                        checked={setting.isRealTime}
                        onChange={onChangeSetting}
                    />
                    <label htmlFor="isRealTime">실시간 인기글</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="isHot"
                        id="isHot"
                        checked={setting.isHot}
                        onChange={onChangeSetting}
                    />
                    <label htmlFor="isHot">HOT 게시글</label>
                </div>
            </div>
        </SettingPageWrapper>
    );
};

export default SettingPage;

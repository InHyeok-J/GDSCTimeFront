import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../components/Colors';
import ArrowTitle from '../../layout/ArrowTitle';
import checkedImg from '../../assets/vector/checked.svg';

const SettingPageWrapper = styled.div`
    input[type='checkbox'] {
        appearance: none;
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        border: 1px solid ${COLORS.grey_400};
        cursor: pointer;
    }

    input[type='checkbox']:checked {
        width: 12px;
        height: 12px;
        background: url(${checkedImg});
        background-size: contain;
        border: none;
    }

    .input-container {
        border-radius: 5px;
        border: 1px solid ${COLORS.grey_400};
    }

    label {
        cursor: pointer;
        margin: 0px 0px 10px 20px;
        display: inline-block;
        font-size: 0.9rem;
        font-weight: 500;
        color: ${COLORS.black};
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
            console.log(e.target.checked);

            setSetting({
                ...setting,
                [e.target.name]: e.target.checked,
            });

            window.localStorage.setItem(
                'setting',
                JSON.stringify({
                    ...setting,
                    [e.target.name]: e.target.checked,
                }),
            );
        },
        [setting],
    );

    return (
        <SettingPageWrapper>
            <ArrowTitle search="/" to="/">
                홈 화면 설정
            </ArrowTitle>
            <div className="board-wrapper ">
                <div>
                    <input
                        className="test"
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

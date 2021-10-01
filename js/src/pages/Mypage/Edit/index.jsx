import React, { useCallback } from 'react';
import styled from 'styled-components';
import MainButton from '../../../components/button/MainButton';
import { COLORS } from '../../../components/Colors';
import MainInput from '../../../components/input/MainInput';
import useInput from '../../../hooks/useInput';
import XButtonTitle from '../../../layout/XButtonTitle';

const EditPageWrapper = styled.div`
    padding: 30px 16px;
    .mypage-edit-title {
        color: ${COLORS.grey_500};
        font-size: 0.8rem;
    }
    input {
        margin-top: 10px;
        margin-bottom: 20px;
    }
`;

const EditPage = () => {
    const [nickname, onChangeNickname] = useInput('');
    const onNicknameChange = useCallback(() => {
        alert('닉네임변경성공');
    }, [nickname]);
    return (
        <EditPageWrapper>
            <XButtonTitle title="닉네임 변경" to="mypage" />
            <div className="mypage-edit-title">닉네임</div>
            <MainInput
                value={nickname}
                onChange={onChangeNickname}
                placeholder="닉네임을 입력해주세요"
            />
            <MainButton text="닉네임 변경" onClick={onNicknameChange} />
        </EditPageWrapper>
    );
};

export default EditPage;

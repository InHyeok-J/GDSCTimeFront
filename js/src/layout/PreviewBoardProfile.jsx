import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/img/temp.png';
import { COLORS } from '../components/Colors';
import { DateChange } from '../utils/dateChange';

const PreviewBoardProfileWrapper = styled.div`
    img {
        width: 24px;
        border-radius: 5px;
    }
    .name-date-block {
        margin-left: 10px;
        display: inline-block;
    }
    .profile-nickname {
        font-size: 0.8rem;
    }
    .profile-date {
        font-size: 0.7rem;
        color: ${COLORS.grey_500};
    }
`;

const PreviewBoardProfile = ({ date, nickname }) => {
    console.log(nickname);
    return (
        <PreviewBoardProfileWrapper>
            <img src={profileImg} alt="프로필이미지" />
            <div className="name-date-block">
                <div className="profile-nickname">
                    {nickname ? nickname : '익명'}
                </div>
                <div className="profile-date">{DateChange(date)}</div>
            </div>
        </PreviewBoardProfileWrapper>
    );
};

export default PreviewBoardProfile;

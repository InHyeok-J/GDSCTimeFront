import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../components/Colors';
import XButtonTitle from '../../../layout/XButtonTitle';

const AuthPageWrapper = styled.div`
    padding: 30px 16px;
    .mypage-auth-title {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .mypage-auth-block {
        padding: 10px;
        background: ${COLORS.grey_light};
        border-radius: 5px;
    }
    .mypage-auth-block-title {
        font-size: 0.8rem;
        font-weight: 700;
    }
    .mypage-auth-block-text {
        margin-top: 5px;
        font-size: 0.7rem;
        font-weight: 300;
    }
`;
const AuthPage = () => {
    return (
        <AuthPageWrapper>
            <XButtonTitle title="학교인증" to="mypage" />
            <div className="mypage-auth-title">인증 방식 선택</div>
            <div className="mypage-auth-block">
                <div className="mypage-auth-block-title">재학생 인증</div>
                <div className="mypage-auth-block-text">
                    게시판 등 모든 커뮤니티 이용이 가능하며,
                </div>
                <div className="mypage-auth-block-text">
                    재학 증명 자료를 통해 인증
                </div>
            </div>
        </AuthPageWrapper>
    );
};

export default AuthPage;

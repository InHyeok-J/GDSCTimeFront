import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import arrowImg from '../../../assets/vector/arrow.svg';
import profileImg from '../../../assets/img/temp.png';
import { COLORS } from '../../../components/Colors';
import Modal from 'react-modal';
import CustomModal from '../../../components/Modal/CustomModal';
import { logoutAction, userCleanAction } from '../../../module/user';

const dummyUser = {
    id: 'idqwer1234',
    name: '조인혁',
    nickname: 'nickname',
    major: '컴공',
};

const MyPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user: userData } = useSelector((state) => state.user);
    const [isModal, setIsModal] = useState(false);

    const onModalOpen = () => {
        setIsModal(true);
    };
    const onModalClose = () => {
        setIsModal(false);
    };
    const onDeleteUser = () => {
        alert('회원탈퇴성공');
        setIsModal(false);
    };

    const onLogOut = async () => {
        try {
            await dispatch(logoutAction());
            alert('로그아웃 성공');
            history.push('/login');
        } catch (err) {
            console.error(err);
            alert('로그아웃 실패');
        }
    };
    if (!userData) return null;

    return (
        <MyPageWrapper>
            <div className="mypage-top">
                <Link to="/">
                    <img src={arrowImg} alt="leftarrow" />
                </Link>
                <span>내 정보</span>
            </div>
            <div className="mypage-profile board-wrapper">
                <img src={profileImg} alt="profileimg" />
                <div>
                    <div className="mypage-profile-id">{userData.userId}</div>
                    <div className="mypage-profile-body">
                        {userData.name}/ {userData.nickname}
                    </div>
                    <div className="mypage-profile-body">{userData.major}</div>
                </div>
            </div>
            <div className="mypage-account board-wrapper">
                <div className="mypage-account-title">계정</div>
                <div>
                    <Link to="/mypage/auth" className="mypage-account-body">
                        학교 인증
                    </Link>
                </div>
                <div className="mypage-account-body">
                    <Link to="/mypage/edit" className="mypage-account-body">
                        닉네임 변경
                    </Link>
                </div>
                <div className="mypage-account-body" onClick={onModalOpen}>
                    회원 탈퇴
                </div>
                <div className="mypage-account-body" onClick={onLogOut}>
                    로그 아웃
                </div>
            </div>
            <Modal isOpen={isModal} style={modalStyle}>
                <CustomModal
                    text="정말로 탈퇴하시겠습니까? 탈퇴를 하게 되면 귀하의 정보는 폐기되며 복구가 불가능합니다"
                    leftBtnText="취소"
                    leftBtnFun={onModalClose}
                    righthBtnFun={onDeleteUser}
                    righthBtnText="확인"
                />
            </Modal>
        </MyPageWrapper>
    );
};

export default MyPage;

const MyPageWrapper = styled.div`
    padding: 5px 16px;
    .mypage-top {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
    }
    .mypage-top > span {
        margin-left: 20px;
        font-weight: 500;
        display: inline-block;
    }
    .mypage-top > a > img {
        width: 28px;
        transform: rotate(180deg);
    }
    .mypage-profile > img {
        width: 48px;
        border-radius: 10px;
        margin-right: 15px;
    }
    .mypage-profile {
        padding: 15px;
        display: flex;
        margin-bottom: 10px;
    }
    .mypage-profile-id {
        font-size: 0.75rem;
        font-weight: bold;
    }
    .mypage-profile-body {
        margin-top: 2px;
        font-size: 0.7rem;
        color: ${COLORS.grey_text};
        font-weight: 400;
    }
    .mypage-account-title {
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }
    .mypage-account-body {
        margin-top: 10px;
        font-weight: 400;
        font-size: 0.8rem;
        cursor: pointer;
    }
`;

const modalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
        width: '300px',
        height: '100px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
    },
};

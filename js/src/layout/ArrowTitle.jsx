import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import arrowImg from '../assets/vector/arrow.svg';
import SearchImg from '../assets/nav/search.svg';

const ArrowTitleWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .arrow-title-left-block {
        display: flex;
        align-items: center;
    }
    span {
        margin-left: 20px;
        font-weight: 500;
        display: inline-block;
    }
    img {
        width: 28px;
    }
    div > a > img {
        width: 28px;
        transform: rotate(180deg);
    }
`;
const ArrowTitle = ({ children, to, search }) => {
    const history = useHistory();
    return (
        <ArrowTitleWrapper>
            <div className="arrow-title-left-block">
                <button onClick={() => history.push('/board')}>
                    <img src={arrowImg} className="img-rotate" alt="이전버튼" />
                </button>
                <span>{children}</span>
            </div>

            {search && (
                <Link to={`/${search}`}>
                    <img src={SearchImg} alt="search" />
                </Link>
            )}
        </ArrowTitleWrapper>
    );
};

export default ArrowTitle;

import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../components/Colors';
import useInput from '../../hooks/useInput';
import arrowImg from '../../assets/vector/arrow.svg';
import searchImg from '../../assets/nav/search.svg';
import { useHistory } from 'react-router';

const SerachPageWrapper = styled.div`
    padding: 10px;
    .search-top-block {
        display: flex;
        width: 100%;
        background: ${COLORS.grey_300};
        height: 40px;
        border-radius: 10px;
    }
    input {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        border-style: none;
        padding: 0px;
        background: ${COLORS.grey_300};
        font-size: 14px;
    }
    input:focus {
        outline: none;
    }
    button {
        img {
            width: 20px;
            opacity: 0.5;
        }
        width: auto;
        padding: 8px;
        height: 40px;
        box-sizing: border-box;
    }
    .search-block {
        padding-top: 50px;
        img {
            width: 60px;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        div {
            margin-top: 20px;
            color: ${COLORS.grey_500};
        }
    }
`;

const SerachPage = () => {
    const history = useHistory();
    const [search, onChangeSearch] = useInput('');
    return (
        <SerachPageWrapper>
            <div className="search-top-block">
                <button onClick={() => history.goBack()}>
                    <img src={arrowImg} className="img-rotate" alt="이전버튼" />
                </button>
                <input
                    placeholder="글 제목, 내용, 헤시태그"
                    value={search}
                    onChange={onChangeSearch}
                />
                <button onClick={() => alert('검색 요청')}>
                    <img src={searchImg} alt="검색버튼" />
                </button>
            </div>
            <div className="search-block">
                <img src={searchImg} alt="검색버튼" />
                <div>~~ 게시판의 글을 검색해보세요</div>
            </div>
        </SerachPageWrapper>
    );
};

export default SerachPage;

import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../components/Colors';
import homePageImg from '../../../assets/linklist/home.png';
import noticeImg from '../../../assets/linklist/horn.png';
import scheduleImg from '../../../assets/linklist/calendar.png';
import libraryImg from '../../../assets/linklist/open-book.png';
import webMailImg from '../../../assets/linklist/world.png';

const ItemWrapper = styled.div`
    width: 80px;
    height: auto;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon-block {
        width: 45px;
        height: 45px;
        text-align: center;
        border-radius: 20px;
        cursor: pointer;
        align-items: center;
        background-color: rgb(245, 245, 245);
        img {
            display: block;
            position: relative;
            top: 10px;
            margin-left: auto;
            margin-right: auto;
            width: 20px;
            height: 20px;
        }
    }
    .text-block {
        width: 30px;
        text-align: center;
        margin-top: 10px;
        font-size: 0.8rem;
        font-weight: 100;
        color: black;
        word-break: keep-all;
    }
`;

const LinkItem = ({ name, href, title }) => {
    const src = () => {
        switch (title) {
            case 'hompage':
                return homePageImg;
            case 'notice':
                return noticeImg;
            case 'schedule':
                return scheduleImg;
            case 'library':
                return libraryImg;
            case 'webmail':
                return webMailImg;
            default:
                return homePageImg;
        }
    };
    console.log(title, src);
    return (
        <ItemWrapper>
            <a className="icon-block" href={href} target="_blank">
                <img src={src()} alt={name} />
            </a>
            <div className="text-block">{name}</div>
        </ItemWrapper>
    );
};

export default LinkItem;

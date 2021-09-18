import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../assets/img/temp.png';
import { COLORS } from '../components/Colors';
import { DateChange } from '../utils/dateChange';

const PrviewWrapper = styled.div`
    margin-top: 10px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    .name-block {
        margin-left: 5px;
        font-size: 1rem;
        color: ${COLORS.black};
    }
    .date-block {
        color: ${COLORS.grey_500};
    }
    img {
        width: 17px;
        height: 17px;
    }
`;

const PreviewProfile = ({ nickname, date }) => {
    const name = nickname ? nickname : '익명';
    return (
        <PrviewWrapper>
            <div>
                <img src={ProfileImg} alt="profileimage" />
                <span className="name-block">{name}</span>
            </div>
            <span className="date-block">{DateChange(date)}</span>
        </PrviewWrapper>
    );
};

export default PreviewProfile;

import React from 'react';
import styled from 'styled-components';
import { universityLinkData } from '../../../components/dummyData';
import LinkItem from './LinkItem';

const LinkListWrappeer = styled.div`
    width: 100%;
    height: 140px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`;

const LinkList = () => {
    return (
        <LinkListWrappeer>
            {universityLinkData.map((v) => (
                <LinkItem
                    name={v.name}
                    href={v.href}
                    key={v.title}
                    title={v.title}
                />
            ))}
        </LinkListWrappeer>
    );
};

export default LinkList;

import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

export default function Header(){
    
    return(
        <Top>
            <img src={logo} alt='logo' />
        </Top>
    )
}

const Top = styled.header`
    width: 100vw;
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.24);
    padding: 10px;

    img{
        width: 60px;
    }
`;
import React from 'react';
import styled from 'styled-components';
import inprogress from 'assets/img/inprogress.gif';

const System = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
        width: 80%;
    }
`;

const Working = styled.h1`
    text-align: center;
    width: 80%; 
    font-family: 'Ubuntu';
    font-size: 1.5rem;
`;

const Mobile = () =>{
    return (
        <System>
            <img src={inprogress} alt='programmer gif' />
            <Working>This app is currently Browser-only, I am working on mobile app and I will annouce it as soon as possible</Working>
        </System>
    )
}

export default Mobile;
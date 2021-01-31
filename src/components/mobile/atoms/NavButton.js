import React from 'react';
import styled, { keyframes } from 'styled-components';

const clickAnimation = keyframes`
    0% { background: black; }
    99% { background: grey }
    100% { background: black }
`;
const Button = styled.button`
    width: 30%;
    height: 100%;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    &:active {
        animation: ${clickAnimation} .25s linear;
    }

    img {
        height: 32px;
    }
`;

const NavButton = ({ img, onClick, action}) => {
    return (    
        <Button onClick={() => onClick()}>
            <img src={img} alt={action} />
        </Button>
    );
}

export default NavButton;
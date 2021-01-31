import styled, { keyframes } from 'styled-components';

const clickEffect = keyframes`
    0% {
        background: grey;
        transform: scale(0);
    }
    99% {
        transform: scale(1);
    }
    100% {
        background: white;
        scale(0);
    }
`;

const Button = styled.button`
    height: 100%;
    width: 128px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    opacity: ${props => props.opacity};
    h1 {
        font-size: 12px;
        font-weight: 700;
        z-index: 2;
    }
    svg {
        height: 50%;
        z-index: 2;
    }

    &:focus:after {
        animation: ${clickEffect} .5s linear;
    }

    &:after {
        content: '';
        width: 64px;
        height: 64px;
        position: absolute;
        float: center;
        border-radius: 50%;
        z-index: 1;
    }
`;

export default Button;
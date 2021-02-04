/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import exitWhite from 'assets/img/symbolic/close-white.svg';
import minimizeWhite from 'assets/img/symbolic/minimize-white.svg';
import maximizeWhite from 'assets/img/symbolic/fullscreen-white.svg';
import maximizeExitWhite from 'assets/img/symbolic/fullscreen_exit-white.svg';
import exitBlack from 'assets/img/symbolic/close-black.svg';
import minimizeBlack from 'assets/img/symbolic/minimize-black.svg';
import maximizeBlack from 'assets/img/symbolic/fullscreen-black.svg';
import maximizeExitBlack from 'assets/img/symbolic/fullscreen_exit-black.svg';

const Button = styled.button`
    height: 100%;
    width: 56px;
    background-size: 35%;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    background-position: center;

    &:focus {
        outline: 0;
    }
    &:hover {
        background-color: ${props => props.theme.mode.secondary};
    }
    ${props => props.action === 'minimize' && css`
        background-image: url(${props.mode === 'dark' ? minimizeWhite : minimizeBlack});
    `}
    ${props => props.action === 'maximize' && css`
        background-image: url(${props.isMaximized ? (props.mode === 'dark' ? maximizeExitWhite : maximizeExitBlack) : (props.mode === 'dark' ? maximizeWhite : maximizeBlack)});
    `}
    ${props => props.action === 'exit' && css`
        border-radius: 0 calc(${props.theme.style.appRadius}px - 2px) 0 0;
        background-image: url(${props.mode === 'dark' ? exitWhite : exitBlack});
        &:hover {
            background-color: red;
        }
    `}
`;

export { Button };
import React from 'react';
import styled, { css } from 'styled-components';
import exit from 'assets/img/icons/close-white.svg';
import minimize from 'assets/img/icons/minimize-white.svg';
import maximize from 'assets/img/icons/fullscreen-white.svg';
import maximizeExit from 'assets/img/icons/fullscreen_exit-white.svg';

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
        background-color: #141414;
    }
    ${props => props.action === 'minimize' && css`
        background-image: url(${minimize});
    `}
    ${props => props.action === 'maximize' && css`
        background-image: url(${props.isMaximized ? maximizeExit : maximize});
    `}
    ${props => props.action === 'exit' && css`
        background-image: url(${exit});
        &:hover {
            background-color: red;
        }
    `}
`;

const ActionButton = ({ onClick, action, appName, isMaximized }) => {
    return(
        <Button onClick={() => onClick(appName)} action={action} isMaximized={isMaximized} />
    );
}

export default ActionButton;
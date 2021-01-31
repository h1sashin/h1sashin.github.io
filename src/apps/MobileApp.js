import React from 'react';
import styled, { css } from 'styled-components';

const AppStyled = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    position: absolute;
    transition: .25s;
    ${props => props.isMinimized && css`
        transform: translateY(50%) scale(0);
    `}
`;

const MobileApp = ({ children, isOpen, isMinimized }) => {
    if(isOpen) {
        return (
            <AppStyled isMinimized={isMinimized}>
                {children}
            </AppStyled>
        );
    } 
        return null;
}

export default MobileApp;
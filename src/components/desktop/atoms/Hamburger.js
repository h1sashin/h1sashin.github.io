import React from 'react'
import styled, { css } from 'styled-components';

const Button = styled.button`
    height: 24px;
    width: 24px;
    background: transparent;
    margin-right: ${props => props.margin}px;
    position: relative;
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
`;

const HamburgerElement = styled.div`
    height: 2px;
    width: 100%;
    background: ${props => props.theme.mode.text};
    border-radius: 16px;
    transition: .25s transform ease-in-out;
    transform-origin: 0 0;
    ${props => props.isActive && css`
        transform: scaleX(0);
    `}
    ${props => props.top && props.isActive && css`
        transform: rotate(45deg) translate(1px, -1px);
    `}
    ${props => props.bottom && props.isActive && css`
        transform: rotate(-45deg) translate(-1px, 1px);
    `}
`;

const Hamburger = ({ margin, openMenu, isMenuOpen }) => {
    return (
        <Button margin={margin} onClick={() => openMenu(!isMenuOpen)}>
            <HamburgerElement isActive={isMenuOpen} top />
            <HamburgerElement isActive={isMenuOpen} />
            <HamburgerElement isActive={isMenuOpen} bottom />
        </Button>
    )
}

export default Hamburger;
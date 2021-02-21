import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const clickAnimation = keyframes`
    0% { background: black; }
    99% { background: grey }
    100% { background: black }
`
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
        animation: ${clickAnimation} 0.25s linear;
    }

    img {
        height: 32px;
    }
    ${props =>
        props.disabled &&
        css`
            opacity: 0;
            &:active {
                animation: none;
            }
            img {
                opacity: 0;
            }
        `}
`

const NavButton = ({ img, onClick, action, disabled }) => {
    return (
        <Button onClick={() => onClick()} disabled={disabled}>
            <img src={img} alt={action} />
        </Button>
    )
}

export default NavButton

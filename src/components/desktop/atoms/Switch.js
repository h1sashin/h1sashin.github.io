import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const SwitchStyled = styled.div`
    width: 196px;
    padding: 8px;
    background: ${props => props.theme.primary};
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    border-radius: ${props => props.theme.style.appRadius}px;
    &:after {
        content: '';
        position: absolute;
        width: 45%;
        left: 5%;
        height: 80%;
        border-radius: ${props => props.theme.style.appRadius}px;
        transition: .2s transform;
        background: ${props => props.color};
        ${props => props.checked && css`
            transform: translateX(100%);
        `}
    }
    label {
        z-index: 1;
    }
`;


const Switch = ({ left, right, dispatch, color }) => {
    const [ checked, setChecked ] = useState(false);
    return (
        <SwitchStyled color={color} checked={checked} onClick={() => {
            setChecked(!checked);
            dispatch(!checked ? right : left);
        }}>
            <label>{left}</label>
            <label>{right}</label>
        </SwitchStyled>
    );
}

export default Switch;
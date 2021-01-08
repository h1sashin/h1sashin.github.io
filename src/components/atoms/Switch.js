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
    border-radius: 15px;
    &:after {
        content: '';
        position: absolute;
        width: 45%;
        left: 5%;
        height: 80%;
        border-radius: 15px;
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
    const dispatchData = !checked ? left : right
    return (
        <SwitchStyled color={color} checked={checked} onClick={() => {
            setChecked(!checked);
            dispatch(dispatchData);
        }}>
            <label>{left}</label>
            <label>{right}</label>
        </SwitchStyled>
    );
}

export default Switch;
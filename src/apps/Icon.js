import React from 'react';
import { connect } from 'react-redux';
import { openApp, minimizeApp } from 'actions';
import styled, { css } from 'styled-components';

const Button = styled.button`
    height: ${props => props.theme.style.height}vh;
    width: ${props => props.iconType === 'text' ? 'auto' : `${props.theme.style.height}vh`};
    margin-right: ${props => props.iconType === 'text' ? '32px' : '16px'};
    border: none;
    background: transparent;
    font-size: 1em;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    position: relative;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    &:focus {
        outline: 0;
    }
    img {
        height: 65%;
    }
    &:hover {
        background: ${props => props.theme.mode.secondary};
    }
    ${props => props.isActive && css`
        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 4px;
            width: 100%;
            background: ${props.color};
        }
    `}
`;

// eslint-disable-next-line no-shadow
const Icon = ({ isActive, appName, openApp, minimizeApp, color, iconType, icon }) => {
    const handleToggleApp = () => {
        if(isActive) {
            minimizeApp(appName);
        } else {
            openApp(appName);
        }
    }
    return(
            <Button onClick={handleToggleApp} isActive={isActive} color={color} iconType={iconType}>
                {iconType === 'text' ? appName : <img src={icon} alt={appName}/>}
            </Button>
    );
}

const mapStateToProps = state => {
    return {
        color: state.themeReducer.primary,
        iconType: state.themeReducer.iconType
    }
}

const mapDispatchToProps = dispatch => ({
    openApp: (app) => dispatch(openApp(app)),
    minimizeApp: (app) => dispatch(minimizeApp(app)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
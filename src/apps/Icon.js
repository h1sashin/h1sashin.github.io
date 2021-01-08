import React from 'react';
import { connect } from 'react-redux';
import { openApp, minimizeApp } from 'actions';
import styled, { css } from 'styled-components';

const Button = styled.button`
    height: 100%;
    margin-left: 64px;
    border: none;
    background: transparent;
    font-size: 1em;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    position: relative;
    color: inherit;
    &:focus {
        outline: 0;
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
const Icon = ({ isActive, appName, openApp, minimizeApp, color }) => {
    const handleToggleApp = () => {
        if(isActive) {
            minimizeApp(appName);
        } else {
            openApp(appName);
        }
    }
    return(
        <Button onClick={handleToggleApp} isActive={isActive} color={color}>
            {appName}
        </Button>
    );
}

const mapStateToProps = state => {
    return {
        color: state.themeReducer.primary
    }
}

const mapDispatchToProps = dispatch => ({
    openApp: (app) => dispatch(openApp(app)),
    minimizeApp: (app) => dispatch(minimizeApp(app)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
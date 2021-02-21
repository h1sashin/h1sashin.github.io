/* eslint-disable no-shadow */
import React from 'react'
import { connect } from 'react-redux'
import {
    openApp,
    minimizeApp,
    openAppMobile,
    minimizeAppMobile,
} from 'actions'
import styled, { css } from 'styled-components'
import { isMobile, isBrowser } from 'react-device-detect'
import defaultIcon from 'assets/img/apps/default.svg'

const Button = styled.button`
    height: ${props => props.theme.style.height}vh;
    width: ${props =>
        props.iconType === 'text'
            ? 'auto'
            : `${props.theme.style.height}vh`};
    ${isBrowser &&
    css`
        margin-right: ${props =>
            props.iconType === 'text' ? '32px' : '16px'};
    `}
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

    ${isMobile &&
    css`
        width: 100%;
        height: 100%;
        flex-direction: column;
        h1 {
            font-size: 16px;
            color: white;
            font-weight: 300;
            position: absolute;
            bottom: 0;
        }
    `}
    &:focus {
        outline: 0;
    }
    img {
        ${isMobile &&
        css`
            width: 70%;
        `}
        ${isBrowser &&
        css`
            height: 65%;
        `}
    }
    ${isBrowser &&
    css`
        &:hover {
            background: ${props => props.theme.mode.secondary};
        }
        ${props =>
            props.isActive &&
            css`
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
    `}
`

const Icon = ({
    isActive,
    appName,
    openApp,
    minimizeApp,
    color,
    iconType,
    icon,
    openAppMobile,
    minimizeAppMobile,
}) => {
    const handleToggleApp = () => {
        if (!isActive) {
            if (isBrowser) {
                openApp(appName)
            } else {
                openAppMobile(appName)
            }
        } else if (isActive) {
            if (isBrowser) {
                minimizeApp(appName)
            } else {
                minimizeAppMobile(appName)
            }
        }
    }

    return (
        <Button
            onClick={handleToggleApp}
            isActive={isActive}
            color={color}
            iconType={iconType}
        >
            {iconType === 'text' ? (
                appName
            ) : (
                <img src={icon} alt={appName} />
            )}
            {isMobile && <h1>{appName}</h1>}
        </Button>
    )
}

const mapStateToProps = state => {
    return {
        color: state.themeReducer.primary,
        iconType: state.themeReducer.iconType,
    }
}

const mapDispatchToProps = dispatch => ({
    openApp: app => dispatch(openApp(app)),
    minimizeApp: app => dispatch(minimizeApp(app)),
    openAppMobile: app => dispatch(openAppMobile(app)),
    minimizeAppMobile: app => dispatch(minimizeAppMobile(app)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Icon)

Icon.defaultProps = {
    icon: defaultIcon,
}

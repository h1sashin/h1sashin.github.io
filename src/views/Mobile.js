/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import MobileNav from 'components/mobile/molecules/MobileNav'
import { Desktop } from 'components/mobile/atoms/Desktop'
import { connect } from 'react-redux'
import { lightTheme, darkTheme } from 'themes/Themes'
import { styleRounded, styleBasic } from 'themes/Styles'
import {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
} from 'themes/Notifications'
import * as notifications from 'components/desktop/organisms/notifications/actions'
import FilesIcon from 'apps/files/FilesIcon'
import SettingsIcon from 'apps/settings/SettingsIcon'
import MailboxIcon from 'apps/mailbox/MailboxIcon'
import MailboxMobile from 'apps/mailbox/MailboxMobile'
import FilesMobile from 'apps/files/FilesMobile'

const System = styled.div`
    width: 100vw;
    height: ${props => props.theme.screenHeight}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

const Warning = styled.h1`
    position: absolute;
    left: 50%;
    float: center;
    color: black;
    font-size: 10px;
    width: 240px;
    height: auto;
    background: blue;
    padding: 8px;
    background: white;
    text-align: center;
    transform: translateX(-50%);
    box-shadow: inset 0 0 16px 1px rgb(0, 0, 0, 0.3);
    border-radius: 16px;
    border: 1px solid black;
    opacity: 0.9;
`

const Mobile = ({ theme }) => {
    const [getScreenHeight, updateScreenHeight] = useState(
        window.innerHeight,
    )

    useEffect(() => {
        notifications.display(
            'Welcome!',
            'Welcome to my portfolio, use the Taskbar below to see some magic of Web Operating System similar to linux based systems',
        )
    }, [])

    const notificationsPosition = () => {
        switch (theme.notificationsPosition) {
            case 'topRight':
                return topRight
            case 'topLeft':
                return topLeft
            case 'bottomLeft':
                return bottomLeft
            case 'bottomRight':
                return bottomRight
            default:
                return topRight
        }
    }

    window.onresize = () => updateScreenHeight(window.innerHeight)

    const currentTheme = {
        mode: theme.mode === 'dark' ? darkTheme : lightTheme,
        style: theme.style === 'rounded' ? styleRounded : styleBasic,
        notifications: notificationsPosition(),
        screenHeight: getScreenHeight,
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <System>
                <Desktop>
                    <Warning>
                        This is not fully working app yet, some
                        functions or buttons may not work or not work
                        properly. Check this website on your PC or
                        laptop to see functional version. I am working
                        all the time to develop a mobile version of my
                        app
                    </Warning>
                    <FilesIcon />
                    <MailboxIcon />
                    <SettingsIcon />
                    <MailboxMobile />
                    <FilesMobile />
                </Desktop>
                <MobileNav />
            </System>
        </ThemeProvider>
    )
}

const mapStateToProps = state => {
    return {
        theme: state.themeReducer,
    }
}

export default connect(mapStateToProps)(Mobile)

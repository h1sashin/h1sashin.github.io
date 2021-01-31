import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'themes/Themes';
import Taskbar from 'components/desktop/organisms/Taskbar';
import Files from 'apps/files/Files';
import Settings from 'apps/settings/Settings';
import Mailbox from 'apps/mailbox/Mailbox';
import Console from 'apps/console/Console';
import { connect } from 'react-redux';
import { styleRounded, styleBasic } from 'themes/Styles';
import Container from 'components/desktop/organisms/notifications/Container';
import { topLeft, topRight, bottomLeft, bottomRight } from 'themes/Notifications'
import * as notifications from 'components/desktop/organisms/notifications/actions';

const DesktopStyled = styled.div`
    height: ${props => props.theme.style.desktopHeight}vh;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    color: black;
`;

const System = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
`;

const Desktop = ({ theme }) => {

    useEffect(() => {
        notifications.display('Welcome!', 'Welcome to my portfolio, use the Taskbar below to see some magic of Web Operating System similar to linux based systems');
    }, []);

    const notificationsPosition = () => {
        switch(theme.notificationsPosition) {
            case 'topRight':
                return topRight;
            case 'topLeft':
                return topLeft;
            case 'bottomLeft':
                return bottomLeft;
            case 'bottomRight':
                return bottomRight;
            default: 
                return topRight;
        }
    }

    const currentTheme = {
        mode: theme.mode === 'dark' ? darkTheme : lightTheme,
        style: theme.style === 'rounded' ? styleRounded : styleBasic,
        notifications: notificationsPosition()
    }

    return(
        <ThemeProvider theme={currentTheme}>
            <System>
                <DesktopStyled>
                    <Container />
                    <Console />
                    <Mailbox />
                    <Files />
                    <Settings />
                </DesktopStyled>
                <Taskbar />
            </System>
        </ThemeProvider>
    );
}

const mapStateToProps = (state) => {
    return {
        theme: state.themeReducer
    }
}

export default connect(mapStateToProps)(Desktop);
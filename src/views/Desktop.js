import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'themes/Themes';
import Taskbar from 'components/organisms/Taskbar';
import Files from 'apps/files/Files';
import Settings from 'apps/settings/Settings';
import Mailbox from 'apps/mailbox/Mailbox';
import Console from 'apps/console/Console';
import { connect } from 'react-redux';

const DesktopStyled = styled.div`
    height: 95vh;
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
    return(
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <System>
                <DesktopStyled>
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
        theme: state.themeReducer.mode
    }
}

export default connect(mapStateToProps)(Desktop);
import React from 'react';
import styled from 'styled-components';
import Taskbar from 'components/organisms/Taskbar';
import Files from 'apps/files/Files';
import Settings from 'apps/settings/Settings';
import Mailbox from 'apps/mailbox/Mailbox';
import Console from 'apps/console/Console';

const DesktopStyled = styled.div`
    height: 96vh;
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

const Desktop = () => {
    return(
        <System>
            <DesktopStyled>
                <Console />
                <Mailbox />
                <Files />
                <Settings />
            </DesktopStyled>
            <Taskbar />
        </System>
    );
}

export default Desktop;
import React from 'react';
import styled from 'styled-components';
import FilesIcon from 'apps/files/FilesIcon';
import SettingsIcon from 'apps/settings/SettingsIcon';
import Clock from 'components/molecules/Clock';
import MailboxIcon from 'apps/mailbox/MailboxIcon'; 
import ConsoleIcon from 'apps/console/ConsoleIcon';

const TaskbarStyled = styled.div`
    width: 98vw;
    height: 4vh;
    background: #181818;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 1vw;
    color: white;
    justify-content: space-between;
    opacity: 0.9;
    font-size: 1.5em;
    
    div {
        height: 100%;
        display: flex;
        align-items: center;
    }
`;

const Taskbar = () => {
    return(
        <TaskbarStyled>
            <div>
                Apps: 
                <FilesIcon />
                <MailboxIcon />
                <ConsoleIcon />
                <SettingsIcon />
            </div>
            <Clock />
        </TaskbarStyled>
    )
}

export default Taskbar;
import React from 'react';
import styled from 'styled-components';
import FilesIcon from 'apps/files/FilesIcon';
import SettingsIcon from 'apps/settings/SettingsIcon';
import Clock from 'components/molecules/Clock';
import MailboxIcon from 'apps/mailbox/MailboxIcon'; 
import ConsoleIcon from 'apps/console/ConsoleIcon';
import { connect } from 'react-redux';

const TaskbarStyled = styled.div`
    width: ${props => props.theme.style.width}vw;
    height: ${props => props.theme.style.height}vh;
    position: absolute;
    left: ${props => props.theme.style.left}vw;
    bottom: ${props => props.theme.style.bottom}vh;
    display: flex;
    align-items: center;
    padding: 0 1vw;
    color: ${props => props.theme.mode.text};
    justify-content: space-between;
    font-size: 1.5em;
    transition: .25s;
    transform-style: preserve-3d;
    div {
        height: 100%;
        display: flex;
        align-items: center;
    }
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: ${props => props.theme.style.radius}px;
        background: ${props => props.theme.mode.primary};
        opacity: ${props => props.transparency};
        transform: translateZ(-1px);
    }
`;

const Taskbar = ({ transparency }) => {
    return(
        <TaskbarStyled transparency={transparency}>
            <div>
                <FilesIcon />
                <MailboxIcon />
                <ConsoleIcon />
                <SettingsIcon />
            </div>
            <Clock />
        </TaskbarStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        transparency: state.themeReducer.taskbarTransparency
    }
}

export default connect(mapStateToProps)(Taskbar);
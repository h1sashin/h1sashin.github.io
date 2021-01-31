import React from 'react';
import styled from 'styled-components';
import ActionButton from 'components/desktop/molecules/ActionButton';

const Bar = styled.div`
    width: 100%;
    height: 40px;
    background: ${props => props.theme.mode.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.mode.text};
    overflow: auto;
    border-radius: ${props => props.theme.style.appRadius}px ${props => props.theme.style.appRadius}px 0 0;
    position: relative;
    span {
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 16px;
        img {
            height: 50%;
        }
        h1 {
            font-size: 16px;
            padding-left: 16px;
        }
    }
`;

const ActionButtons = styled.div`
    height: 100%;
`;

const TitleBar = ({ exit, minimize, maximize, appName, isMaximized, icon }) => {
    return(
        <Bar className='dragHandler'>
            <span>
                <img src={icon} alt={appName} />
                <h1>{appName.toUpperCase()}</h1>
            </span>
            <ActionButtons>
                <ActionButton onClick={minimize} action='minimize' appName={appName} />
                <ActionButton onClick={maximize} action='maximize' appName={appName} isMaximized={isMaximized} />
                <ActionButton onClick={exit} action='exit' appName={appName} />
            </ActionButtons>
        </Bar>
    )
}

export default TitleBar;
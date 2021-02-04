import React from 'react';
import ActionButton from 'components/desktop/molecules/ActionButton';
import { ActionButtons, Bar } from './styles';

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
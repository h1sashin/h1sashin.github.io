import React from 'react';
import styled from 'styled-components';
import ActionButton from 'components/molecules/ActionButton';

const Bar = styled.div`
    width: 100%;
    height: 40px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    overflow: auto;
    h1 {
        font-size: 16px;
        padding-left: 16px;
    }
`;

const ActionButtons = styled.div`
    height: 100%;
`;

const TitleBar = ({ exit, minimize, maximize, appName, isMaximized }) => {
    return(
        <Bar className='dragHandler'>
            <h1>{appName}</h1>
            <ActionButtons>
                <ActionButton onClick={minimize} action='minimize' appName={appName} />
                <ActionButton onClick={maximize} action='maximize' appName={appName} isMaximized={isMaximized} />
                <ActionButton onClick={exit} action='exit' appName={appName} />
            </ActionButtons>
        </Bar>
    )
}

export default TitleBar;
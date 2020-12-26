import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import App from 'apps/App';

const Msg = styled.h1`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const Settings = ({ settings }) => {
    const { isOpen, isMinimized, isMaximized, x, y, width, height, appName } = settings;
    return(
        <App isOpen={isOpen} isMinimized={isMinimized} isMaximized={isMaximized} x={x} y={y} width={width} height={height} appName={appName}>
            <Msg>
                Work in progress
            </Msg>
        </App>
    );
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(mapStateToProps)(Settings);
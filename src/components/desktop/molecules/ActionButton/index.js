import React from 'react';
import { connect } from 'react-redux';
import { Button } from './styles';

const ActionButton = ({ onClick, action, appName, isMaximized, themeState }) => {
    const { mode, theme } = themeState;
    return(
        <Button onClick={() => onClick(appName)} action={action} isMaximized={isMaximized} mode={mode} theme={theme} />
    );
}

const mapStateToProps = (state) => {
    return {
        themeState: state.themeReducer
    }
}

export default connect(mapStateToProps)(ActionButton);
import React from 'react';
import { connect } from 'react-redux';
import Icon from 'apps/Icon';

const SettingsIcon = ({ settings }) => {
    const { isOpen, appName } = settings;
    return(
        <Icon appName={appName} isActive={isOpen} />
    );
}

const mapStateToProps = (state) => {
    return {
        settings: state.appsReducer.settings
    }
}

export default connect(mapStateToProps)(SettingsIcon);
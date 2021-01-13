import React from 'react';
import { connect } from 'react-redux';
import Icon from 'apps/Icon';
import icon from 'assets/img/apps/preferences.svg';

const SettingsIcon = ({ settings }) => {
    const { isOpen, appName } = settings;
    return(
        <Icon appName={appName} isActive={isOpen} icon={icon}/>
    );
}

const mapStateToProps = (state) => {
    return {
        settings: state.appsReducer.settings
    }
}

export default connect(mapStateToProps)(SettingsIcon);
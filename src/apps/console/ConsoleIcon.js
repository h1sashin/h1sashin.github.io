import React from 'react';
import { connect } from 'react-redux';
import Icon from 'apps/Icon';
import icon from 'assets/img/apps/terminal.svg';

const ConsoleIcon = ({ console }) => {
    const { isOpen, appName } = console;
    return(
        <Icon appName={appName} isActive={isOpen} icon={icon}/>
    );
}

const mapStateToProps = (state) => {
    return {
        console: state.appsReducer.console
    }
}

export default connect(mapStateToProps)(ConsoleIcon);
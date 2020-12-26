import React from 'react';
import { connect } from 'react-redux';
import Icon from 'apps/Icon';

const ConsoleIcon = ({ console }) => {
    const { isOpen, appName } = console;
    return(
        <Icon appName={appName} isActive={isOpen} />
    );
}

const mapStateToProps = ({ console }) => ({ console });

export default connect(mapStateToProps)(ConsoleIcon);
import React from 'react';
import { connect } from 'react-redux';
import Icon from 'apps/Icon';

const FilesIcon = ({ files }) => {
    const { isOpen, appName } = files;
    return(
        <Icon appName={appName} isActive={isOpen} />
    );
}

const mapStateToProps = (state) => {
    return {
        files: state.appsReducer.files
    }
}


export default connect(mapStateToProps)(FilesIcon);
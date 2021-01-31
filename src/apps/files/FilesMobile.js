import React from 'react';
import { connect } from 'react-redux';
import MobileApp from 'apps/MobileApp';

const FilesMobile = ({ files }) => {
    const { isOpen, isMinimized } = files;
    return (
        <MobileApp isOpen={isOpen} isMinimized={isMinimized}>
            <div>files app</div>
        </MobileApp>
    )
}

const mapStateToProps = (state) => {
    return {
        files: state.appsReducer.files
    }
}

export default connect(mapStateToProps)(FilesMobile);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import MobileApp from 'apps/MobileApp';
import { directoriesTree } from 'apps/files/directoriesTree';
import Path from 'components/mobile/atoms/Path';



const FilesMobile = ({ files }) => {
    const { isOpen, isMinimized } = files;
    const [ currentPath, updatePath ] = useState('main');
    console.log(updatePath);
    return (
        <MobileApp isOpen={isOpen} isMinimized={isMinimized} style={{ display: 'flex', flexDirection: 'column' }}>
            <Path currentPath={currentPath} />
            {directoriesTree.children.map((item) => { return <button type='button' key={item.name} onClick={() => updatePath(item.path)}>{item.name}</button> } )}
            {directoriesTree.children.filter(item => item.path === currentPath).map(item => {
                return item.component;
            })}
        </MobileApp>
    )
}

const mapStateToProps = (state) => {
    return {
        files: state.appsReducer.files
    }
}

export default connect(mapStateToProps)(FilesMobile);
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import MobileApp from 'apps/MobileApp';
import { directoriesTree } from 'apps/files/directoriesTree';
import Path from 'components/mobile/atoms/Path';
import FileIcon from 'components/mobile/atoms/FileIcon';

const Grid = styled.div`
    width: 100%;
    height: calc(100% - 128px);
    display: grid;
    align-content: flex-start;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(90px, 125px));
    grid-template-rows: repeat(auto-fill, minmax(90px, 125px));
    align-items: center;
    justify-items: center;
`;

const FilesMobile = ({ files }) => {
    const { isOpen, isMinimized } = files;
    const [ currentPath, updatePath ] = useState('main');
    console.log(updatePath);
    return (
        <MobileApp isOpen={isOpen} isMinimized={isMinimized} style={{ display: 'flex', flexDirection: 'column' }}>
            <Path currentPath={currentPath} />
            <Grid>
                {currentPath === 'main' ? directoriesTree.children.map((item) => {
                    return <FileIcon key={item.name} fileName={item.name} fileType={item.type} fileExtenstion={item.extension} fileOnClick={updatePath} filePath={item.path} /> 
                }) : directoriesTree.children.filter(item => item.path === currentPath).map(item => {
                    return item.children.map((it) => {
                        return <FileIcon key={it.name} fileName={it.name} fileType={it.type} fileExtension={it.extension} fileOnClick={updatePath} filePath={it.path} />
                    })
                })}
            </Grid>
        </MobileApp>
    )
}

const mapStateToProps = (state) => {
    return {
        files: state.appsReducer.files
    }
}

export default connect(mapStateToProps)(FilesMobile);
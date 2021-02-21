/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
import React, { useState, cloneElement } from 'react'
import { connect } from 'react-redux'
// import { ReactComponent as Dir } from 'assets/img/places/dir.svg'
import App from 'apps/App'
import { directoriesTree } from 'apps/files/directoriesTree'
import FileIcon from 'components/desktop/atoms/FileIcon'
import icon from 'assets/img/apps/files.svg'
import Sidebar from 'components/desktop/molecules/Sidebar'
import Topbar from 'components/desktop/molecules/Topbar'
import { Grid, Content } from './styles'

const Files = ({ files }) => {
    const {
        isOpen,
        isMinimized,
        isMaximized,
        x,
        y,
        width,
        height,
        appName,
    } = files
    const [currentPath, updatePath] = useState('main')

    const findPath = (path, array = directoriesTree) => {
        // eslint-disable-next-line consistent-return
        return array.reduce((a, item) => {
            if (a) {
                return a
            }
            if (item.path === path) {
                if (item.type === 'directory') {
                    return item.children.map(e => {
                        return (
                            <FileIcon
                                key={e.name}
                                fileName={e.name}
                                fileType={e.type}
                                fileExtension={e.extension}
                                fileOnClick={updatePath}
                                filePath={e.path}
                            />
                        )
                    })
                }
                return cloneElement(item.component, {
                    ...item,
                })
            }
            if (item.children) {
                return findPath(path, item.children)
            }
        }, null)
    }

    return (
        <App
            isOpen={isOpen}
            isMinimized={isMinimized}
            isMaximized={isMaximized}
            x={x}
            y={y}
            width={width}
            height={height}
            appName={appName}
            icon={icon}
        >
            <Content>
                <Sidebar
                    path={currentPath}
                    updatePath={updatePath}
                    directoriesTree={directoriesTree}
                />
                <div style={{ height: 'inherit', width: 'inherit' }}>
                    <Topbar path={currentPath} />
                    <Grid desktop>
                        {findPath(currentPath, directoriesTree)}
                    </Grid>
                </div>
            </Content>
        </App>
    )
}

const mapStateToProps = state => {
    return {
        files: state.appsReducer.files,
    }
}

export default connect(mapStateToProps)(Files)

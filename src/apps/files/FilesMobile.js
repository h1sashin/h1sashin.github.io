/* eslint-disable no-nested-ternary */
import React, { useState, cloneElement } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Dir } from 'assets/img/places/dir.svg'
import MobileApp from 'apps/MobileApp'
import { directoriesTree } from 'apps/files/directoriesTree'
import Path from 'components/mobile/atoms/Path'
import FileIcon from 'components/mobile/atoms/FileIcon'
import BottomBar from 'components/mobile/atoms/BottomBar'
import Button from 'components/mobile/atoms/Button'
import { Grid } from './styles'

const FilesMobile = ({ files }) => {
    const { isOpen, isMinimized } = files
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
                return cloneElement(item.component, { ...item })
            }
            if (item.children) {
                return findPath(path, item.children)
            }
        }, null)
    }

    return (
        <MobileApp
            isOpen={isOpen}
            isMinimized={isMinimized}
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <Path currentPath={currentPath} />
            <Grid>{findPath(currentPath, directoriesTree)}</Grid>
            <BottomBar>
                <Button
                    opacity={currentPath === 'main' ? '1' : '0.6'}
                    onClick={() => updatePath('main')}
                >
                    <Dir fill={currentPath === 'main' && '#1167B1'} />
                    <h1
                        style={{
                            color:
                                currentPath === 'main'
                                    ? '#1167B1'
                                    : 'black',
                        }}
                    >
                        Main
                    </h1>
                </Button>
                <Button
                    opacity={
                        currentPath === 'main/portfolio' ? '1' : '0.6'
                    }
                    onClick={() => updatePath('main/portfolio')}
                >
                    <Dir
                        fill={
                            currentPath === 'main/portfolio'
                                ? '#1167B1'
                                : 'black'
                        }
                    />
                    <h1
                        style={{
                            color:
                                currentPath === 'main/portfolio' &&
                                '#1167B1',
                        }}
                    >
                        Portfolio
                    </h1>
                </Button>
            </BottomBar>
        </MobileApp>
    )
}

const mapStateToProps = state => {
    return {
        files: state.appsReducer.files,
    }
}

export default connect(mapStateToProps)(FilesMobile)

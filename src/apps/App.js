/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Rnd as Draggable } from 'react-rnd';
import styled from 'styled-components';
import TitleBar from 'components/molecules/TitleBar';
import { connect } from 'react-redux';
import { openApp, minimizeApp, maximizeApp, updateSize, updatePosition } from 'actions';
import zIndex from 'apps/zIndex.json';

const Content = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    position: relative;
    bottom: 0;
    overflow: auto;
`;

// eslint-disable-next-line no-shadow
const App = ({ children, isOpen, isMinimized, isMaximized, x, y, width, height, appName, openApp, minimizeApp, maximizeApp, updateSize, updatePosition }) => {
    const appSize = () => {
        let size = null;
        if (isMaximized) {
            size = { width: '100%', height: '100%' };
        } else if (isMinimized) {
            size = { width: 0, height: 0 }
        } else {
            size = { width, height }
        }
        return size;
    }

    // eslint-disable-next-line no-multi-assign
    let [ index, setIndex ] = useState(zIndex.zIndex += 1);
    if(isOpen){
        return(
            <Draggable
                style={{ background: '#2A2D38', border: '1px solid red', zIndex: zIndex.zIndex }}
                size={appSize()}
                minWidth='640'
                minHeight='360'
                onDragStart={() => setIndex(index += 1)}
                onResizeStart={() => setIndex(index += 1)}
                position={!isMaximized ? { x, y } : { x: 0, y: 0 }}
                onDragStop={(e, d) => updatePosition(appName, e, d)}
                onResizeStop={(e, direction, ref, delta, position) => updateSize(appName, e, direction, ref, delta, position)}
                dragHandleClassName='dragHandler'
                enableResizing={!isMaximized}
                disableDragging={isMaximized}
            >
                <TitleBar appName={appName} exit={openApp} minimize={minimizeApp} maximize={maximizeApp} isMaximized={isMaximized}/>
                <Content>
                    {children}
                </Content>
            </Draggable>
        );
    }
    return null;
}

const mapDispatchToProps = dispatch => ({
    openApp: (app) => dispatch(openApp(app)),
    minimizeApp: (app) => dispatch(minimizeApp(app)),
    maximizeApp: (app) => dispatch(maximizeApp(app)),
    updateSize: (app, e, direction, ref, delta, position) => dispatch(updateSize(app, e, direction, ref, delta, position)),
    updatePosition: (app, e, d) => dispatch(updatePosition(app, e, d))
});

export default connect(null, mapDispatchToProps)(App);
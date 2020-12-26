/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import App from 'apps/App';
import { applyCommand } from 'apps/console/consoleActions';

const ConsoleStyled = styled.div`
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: #00FF00;
    padding: 2px;
    font-size: 1.2em;
    span {
        display: flex;
        font-size: 0.7em;
        align-items: center;
        width: 100%;
        align-items: flex-start;
    }
`;

const Input = styled.input`
    height: auto;
    width: 90%;
    font-size: 14px;
    color: #00FF00;
    background: transparent;
    border: none;
    font-weight: 300;
    display: flex;
    align-items: center;
    font-size: 1em;
    &:focus {
        outline: 0;
    }
    font-weight: 300;
`;

const Output = styled.div`
    display: flex;
    flex-direction: column;
    
    h6{
        margin: 0;
        padding: 0;
    }
`;

const Console = ({ console }) => {
    const { isOpen, isMinimized, isMaximized, x, y, width, height, appName } = console;
    const [ value, updateValue ] = useState('');
    const [ output, updateOutput ] = useState(['WebConsole [Version 0.1]']);

    let inputRef = null;

    const setInputRef = element => {
        inputRef = element;
    }

    const focusInput = () => {
        if(inputRef) {
            inputRef.focus();
        }
    }

    const handleEnterButton = (event) => {
        if(event.key === 'Enter') {
            if(value === 'clear'){
                updateOutput([
                    ''
                ]);
                updateValue('');
            } else {
                updateOutput([
                    ...output,
                    `$/root/ ${value}`,
                    applyCommand(value)
                ]);
                updateValue('');
            }
        }
        return null;
    }

    useEffect(() => {
        focusInput();
    });

    return(
        <App isOpen={isOpen} isMinimized={isMinimized} isMaximized={isMaximized} x={x} y={y} width={width} height={height} appName={appName}>
            <ConsoleStyled>
                <Output>{output.map((item, e) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <h6 key={e}>{item}</h6>
                })}</Output>
                <span>$/root/<Input type='text' maxLength='96' ref={setInputRef} spellcheck="false" value={value} onChange={(event) => updateValue(event.target.value)} onKeyDown={(event) => handleEnterButton(event)} /></span>
            </ConsoleStyled>
        </App>
    );
}

const mapStateToProps = ({ console }) => ({ console });

export default connect(mapStateToProps)(Console);
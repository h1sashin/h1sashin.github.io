/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import App from 'apps/App'
import { applyCommand } from 'apps/console/consoleActions'
import icon from 'assets/img/apps/terminal.svg'
import { ConsoleStyled, Input, Output } from './styles'

const Console = ({ console }) => {
    const {
        isOpen,
        isMinimized,
        isMaximized,
        x,
        y,
        width,
        height,
        appName,
    } = console
    const [value, updateValue] = useState('')
    const [output, updateOutput] = useState([
        'WebConsole [Version 0.1]',
    ])

    let inputRef = null

    const setInputRef = element => {
        inputRef = element
    }

    const focusInput = () => {
        if (inputRef) {
            inputRef.focus()
        }
    }

    const handleEnterButton = event => {
        if (event.key === 'Enter') {
            if (value === 'clear') {
                updateOutput([''])
                updateValue('')
            } else {
                updateOutput([
                    ...output,
                    `> ${value}`,
                    applyCommand(value),
                ])
                updateValue('')
            }
        }
        return null
    }

    useEffect(() => {
        focusInput()
    })

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
            <ConsoleStyled>
                <Output>
                    {output.map((item, e) => {
                        // eslint-disable-next-line react/no-array-index-key
                        return <h6 key={e}>{item}</h6>
                    })}
                </Output>
                <span>
                    {'>'}
                    <Input
                        type='text'
                        maxLength='96'
                        ref={setInputRef}
                        spellcheck='false'
                        value={value}
                        onChange={event =>
                            updateValue(event.target.value)
                        }
                        onKeyDown={event => handleEnterButton(event)}
                    />
                </span>
            </ConsoleStyled>
        </App>
    )
}

const mapStateToProps = state => {
    return {
        console: state.appsReducer.console,
    }
}

export default connect(mapStateToProps)(Console)

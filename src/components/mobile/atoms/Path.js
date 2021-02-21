import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
    width: 100vw;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: linear-gradient(#1167b1, #2a9df4);
    flex-direction: column;
    position: relative;
    span {
        font-size: 24px;
        color: white;
    }
`

const CurrentPath = styled.input`
    z-index: 2;
    width: 85%;
    height: 36px;
    border: none;
    border-radius: 16px;
    padding: 0 16px;
    border: 1px solid #2a9df4;
    color: rgb(0, 0, 0, 0.7);
`

const Path = ({ currentPath }) => {
    return (
        <Bar>
            <span>File Manager</span>
            <CurrentPath value={currentPath} readOnly />
        </Bar>
    )
}

export default Path

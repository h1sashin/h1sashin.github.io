import styled, { keyframes } from 'styled-components'

const clickEffect = keyframes`
    0% {
        background: grey;
        transform: scale(0);
    }
    99% {
        transform: scale(1);
    }
    100% {
        background: white;
        scale(0);
    }
`

const Content = styled.div`
    width: 100vw;
    min-height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
`

const TopBar = styled.div`
    width: 100vw;
    height: 64px;
    background: white;
    display: flex;
    align-items: center;
    position: relative;
    h1 {
        font-size: 20px;
        font-weight: 500;
    }
    button {
        height: 64px;
        width: 64px;
        border: none;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            height: 40%;
            z-index: 2;
        }
        &:focus:after {
            animation: ${clickEffect} 0.5s linear;
        }

        &:after {
            content: '';
            width: 64px;
            height: 64px;
            position: absolute;
            float: center;
            border-radius: 50%;
            z-index: 1;
        }
    }
`

const Form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    span {
        height: 64px;
        overflow: hidden;
        display: flex;
        border-bottom: rgb(0, 0, 0, 0.1) solid 1px;
    }
`

const Input = styled.input`
    height: 64px;
    overflow: hidden;
    width: ${props =>
        props.gotLabel ? 'calc(100% - 64px)' : 'calc(100% - 8px)'};
    border: none;
    border-bottom: ${props =>
        props.gotLabel ? 'none' : 'rgb(0,0,0,0.1) solid 1px'};
    font-size: 1rem;
    padding-left: ${props => (props.gotLabel ? '0' : '8px')};
    &::placeholder {
        font-weight: 300;
    }
`

const TextArea = styled.textarea`
    border: none;
    min-height: 128px;
    height: calc(100% - 192px - 48px - 9px);
    width: calc(100% - 16px);
    font-size: 1rem;
    padding: 24px 8px;
`

const Label = styled.label`
    width: 56px;
    height: 64px;
    display: flex;
    align-items: center;
    opacity: 0.5;
    padding-left: 8px;
    font-size: 16px;
    &::placeholder {
        font-size: 16px;
    }
`

export { Content, TopBar, Form, Input, TextArea, Label }

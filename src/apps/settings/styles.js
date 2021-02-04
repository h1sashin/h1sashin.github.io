import styled, { css } from 'styled-components';
import { TwitterPicker } from 'react-color';

const Content = styled.div`
    padding-top: 32px;
    min-height: calc(100% - 32px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: ${props => props.theme.mode.text};
    `;

    const Side = styled.div`
    width: 40%;
    max-width: 800px;
    ${props => props.right && css`
        margin-left: 16px;
    `}
    ${props => props.left && css`
        margin-right: 16px;
    `}
`;

const Section = styled.div`
    border-radius: ${props => props.theme.style.appRadius}px;
    background: ${props => props.theme.mode.primary};
    padding: 16px; 
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 32px;
    span {
        width: 50%;
        display: flex;
        align-items: center;
        img {
            margin-right: 3%;
            height: 48px;
        }
        h1 {
            font-size: 32px;
        }
        margin-bottom: 16px;
    }
    font-weight: 300;
`;

const Subsection = styled.div`  
    border-radius: ${props => props.theme.style.appRadius}px;
    background: ${props => props.theme.mode.secondary};
    width: calc(100% - 32px);
    padding: 16px;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    ${props => props.vertical && css`
        flex-direction: column;
    `}
    &:last-child {
        margin-bottom: 0;
    }
`;

const Picker = styled(TwitterPicker)`
    span {
        display: block;
        margin: 0;
        width: auto;
    }
`;

const Mode = styled.span` 
    width: calc(45% - 16px);
    padding: 8px;
    ${props => props.left && css`
        border-radius: ${props.theme.style.appRadius}px 0 0 ${props.theme.style.appRadius}px;
    `}
    ${props => props.right && css`
        border-radius: 0 ${props.theme.style.appRadius}px ${props.theme.style.appRadius}px 0;
    `}
    background: ${props => props.theme.mode.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        border: none;
        background: transparent;
        width: 100%;
        border-radius: ${props => props.theme.style.appRadius}px;
        margin-bottom: 8px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        position: relative;
        img {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
            border-radius: ${props => props.theme.style.appRadius}px;
        }
    }
    ${props => props.isActive && css`
        div {
            position: absolute;
            left: -1px;
            top: -1px;
            border-radius: ${props.theme.style.appRadius}px;
            width: calc(100% - 8px);
            height: calc(100% - 8px);
            border: 5px solid ${props.color};
        }
    `}
`;

const Position = styled.div`
    width: 50%;
    position: relative;
    border-radius: ${props => props.theme.style.appRadius}px;
    img {
        width: 100%;
        border-radius: ${props => props.theme.style.appRadius}px;
    }
    &:after {
        border-radius: ${props => props.theme.style.appRadius}px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.mode.primary};
        content: '';
    }
`;

const PositionButton = styled.button`
    position: absolute;
    width: 25%;
    height: 20%;
    border: none;
    border-radius: ${props => props.theme.style.appRadius}px;
    background: ${props => props.isActive ? props.bg : props.theme.mode.secondary};
    z-index: 1;
    cursor: pointer;
    ${props => props.topLeft && css`
        top: 5%;
        left: 5%;
    `}
    ${props => props.topRight && css`
        top: 5%;
        right: 5%;
    `}
    ${props => props.bottomLeft && css`
        bottom: 5%;
        left: 5%;
    `}
    ${props => props.bottomRight && css`
        bottom: 5%;
        right: 5%;
    `}
`;

export { Content, Side, Section, Subsection, Picker, Mode, Position, PositionButton };
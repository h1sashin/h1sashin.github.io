import styled from 'styled-components'

const Styled = styled.div`
    width: 384px;
    padding: 16px 0;
    height: calc(100% - 32px);
    overflow-y: auto;
    background: ${props => props.theme.mode.primary};
    &::-webkit-scrollbar {
        background: none;
        width: 8px;
        position: absolute;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        width: 2px;
        background: ${props => props.theme.mode.secondary};
        border-radius: 32px;
    }
    border-right: 8px solid ${props => props.theme.mode.primary};
    border-radius: 0 0 0 ${props => props.theme.style.appRadius}px;
`

const Ul = styled.ul`
    margin: 0 0 0 16px;
    padding: 0;
    list-style-type: none;
`

const Li = styled.li`
    margin: 16px 0 0 0;
    padding: 0;
`

const LiElement = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.mode.text};
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
        margin-right: 16px;
        width: 16px;
    }
`

export { Styled, Ul, Li, LiElement }

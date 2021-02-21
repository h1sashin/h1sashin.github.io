import styled, { css } from 'styled-components'
import main from 'assets/img/places/dir.svg'

const SidebarStyled = styled.div`
    left: 0;
    top: 0;
    width: calc(256px - 32px);
    height: calc(100% - 64px);
    padding: 32px 16px;
    background: ${props => props.theme.mode.primary};
    font-size: 16px;
    overflow: auto;
    position: sticky;
    border-radius: 0 0 0 ${props => props.theme.style.appRadius}px;
    color: ${props => props.theme.mode.text};

    ${props =>
        props.settings &&
        css`
            padding: 0;
            width: 64px;
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `}

    h1, h3 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &:before {
            margin-right: 10px;
            content: '';
            display: inline-block;
            height: 22px;
            width: 22px;
            background-image: url(${main});
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            font-weight: 700;
            font-family: 'Ubuntu', sans-serif;
        }
    }

    h1 {
        font-size: 1em;
    }

    h3 {
        font-size: 1em;
        margin-left: 10px;
    }
`

export default SidebarStyled

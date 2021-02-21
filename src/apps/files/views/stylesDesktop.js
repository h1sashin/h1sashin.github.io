import styled, { css } from 'styled-components'

const Desktop = styled.div`
    padding: 16px;
    position: absolute;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    img {
        width: 100%;
        height: auto;
        box-shadow: 0 0 16px 1px rgb(0, 0, 0);
    }
    * {
        color: ${props => props.theme.mode.text};
    }
    ${props =>
        props.littleGrid &&
        css`
            grid-template-columns: 64px auto;
            grid-template-rows: 64px auto;
            img {
                box-shadow: none;
            }
        `}
`

const App = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    display: grid;
    grid-template-rows: 64px calc(100% - 64px);
    grid-template-columns: calc(100% - 64px) 64px;
    svg {
        fill: ${props => props.theme.mode.text};
    }
`

export { Desktop, App }

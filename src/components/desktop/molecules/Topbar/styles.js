import styled from 'styled-components'

const Styled = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.mode.primary};
`

const Bar = styled.div`
    width: calc(100% - 32px);
    height: 80%;
    padding-left: 8px;
    border: 1px solid ${props => props.theme.mode.secondary};
    display: flex;
    align-items: center;
    h5 {
        color: white;
        font-weight: 300;
    }
`

export { Styled, Bar }

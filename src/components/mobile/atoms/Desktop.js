import styled from 'styled-components'

export const Desktop = styled.div`
    position: relative;
    width: 100vw;
    height: calc(100% - 48px);
    display: grid;
    align-content: flex-start;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(60px, 93.75px));
    grid-template-rows: repeat(auto-fill, minmax(60px, 93.75px));
    align-items: center;
    justify-items: center;
`

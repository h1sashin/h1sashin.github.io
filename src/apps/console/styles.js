import styled from 'styled-components';

const ConsoleStyled = styled.div`
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #00FF00;
    padding: 4px;
    font-size: 1.2em;
    border-radius: 0 0 ${props => props.theme.style.appRadius}px ${props => props.theme.style.appRadius}px;
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

export { ConsoleStyled, Input, Output };
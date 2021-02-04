import styled from 'styled-components';

const FormStyled = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: ${props => props.theme.mode.text};
`;

const SubmitButton = styled.input`
    position: absolute;
    right: 16px;
    bottom: 16px;
    border-radius: 50px;
    box-shadow: 0 0 10px 0 black;
    width: 96px;
    height: 48px;
    border: none;
    background: ${props => props.color};;
    font-size: 16px;
    font-family: 'Ubuntu';
    &:focus {
        outline: 0;
        background: none;
    }
`;

const DataContainer = styled.div`
    margin-top: 16px;
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

const Input = styled.span`
    width: ${props => props.type === 'email' ? '45%' : '90%'};
    height: 32px;
    position: relative;
    margin-top: 16px;
    input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid white;
        color: ${props => props.theme.mode.text};
        &:focus {
            outline: 0;
            background: none;
        }
    }
    label {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 24px;
        &.active {
            font-size: 2px;
        }
    }
`;

const Textarea = styled.span`
    width: 90%;
    height: 50%;
    textarea {
        background: transparent;
        color: ${props => props.theme.mode.text};
        width: 100%;
        height: 100%;
        border: none;
        border-bottom: 1px solid white;
        margin-top: 16px;
        &:focus {
            outline: 0;
        }
    }
`;

export { FormStyled, SubmitButton, DataContainer, Input, Textarea };
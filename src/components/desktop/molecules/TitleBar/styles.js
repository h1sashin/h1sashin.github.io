import styled from 'styled-components';

const Bar = styled.div`
    width: 100%;
    height: 40px;
    background: ${props => props.theme.mode.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.mode.text};
    overflow: auto;
    border-radius: ${props => props.theme.style.appRadius}px ${props => props.theme.style.appRadius}px 0 0;
    position: relative;
    span {
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 16px;
        img {
            height: 70%;
        }
        h1 {
            font-size: 16px;
            padding-left: 16px;
        }
    }
`;

const ActionButtons = styled.div`
    height: 100%;
`;

export { ActionButtons, Bar };
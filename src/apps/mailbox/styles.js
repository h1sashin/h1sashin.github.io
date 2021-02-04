import styled from 'styled-components';

const Mailbox = styled.div`
    width: 100%;
    height: calc(100% - 64px);
    background: white;
    color: black;
    position: relative;
`;

const Home = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    h1 {
        margin: 8px;
        font-size: 16px;
        opacity: 0.75;
    }
`;


const MessageContainer = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.mode.text};
`;

const Title = styled.h1`
    margin-bottom: 16px;
`;

const From = styled.header`
    margin-bottom: 8px;
`;

const Message = styled.article`

`;

export { Mailbox, Home, MessageContainer, Title, From, Message };
import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import SidebarStyled from 'components/atoms/SidebarStyled';
import { connect } from 'react-redux';
import App from 'apps/App';
import ContentStyled from 'components/atoms/ContentStyled';
import Child from 'components/atoms/Child';
import MailboxItem from 'components/molecules/MailboxItem';
import MailboxForm from 'components/organisms/MailboxForm';

const MessageContainer = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    margin-bottom: 16px;
`;

const From = styled.header`
    margin-bottom: 8px;
`;

const Message = styled.article`

`;

const Context = createContext({
    currentIndex: null,
    setIndex: () => {},
});

const messages = [
    {
        id: 0,
        title: 'New message',
        message: 'addNew',
    },
    {
        id: 1,
        from: 'cdprfannumber1@gmail.com',
        title: 'Fix cyberpunk',
        message: `fix these bugs, this game is unplayable. Refund me my money you don't deserve it.`
    },
    {
        id: 2,
        from: 'unknown',
        title: '01001110',
        message: '00110010 00110001 00110011 00110111 00100000 00111001 00111001 00110111 00100000 00110010 00110001 00110001 00110101'
    },
    {
        id: 3,
        from: 'hiszaszin@gmail.com',
        title: `About the website`,
        message: `This website isn't currently what I want it to be, It's not fully styled as should be, and not fully functional as I want it to be. I'll keep updating it till it is what I hava in my mind. New apps, new features, more personalisation, more console functionality, pseudo web browser, cookies etc.`
    }
]

const Sidebar = () => {
    const { setIndex } = useContext(Context);
    return (
        <SidebarStyled>
            {messages.map((elem) => {
                return (
                    <MailboxItem key={elem.id} onClick={setIndex} from={elem.from} message={elem.message} title={elem.title} index={elem.id} />
                )
            })}
        </SidebarStyled>
    );
}

const Content = ({ children }) => {
    const { currentIndex } = useContext(Context);
    return (
        <ContentStyled>
            <Child>
                {currentIndex === null ? null : children[currentIndex]}
            </Child>
        </ContentStyled>
    )
}

const Wizard = ({ children }) => {
    const [ currentIndex, setIndex ] = useState(null);
    return(
        <Context.Provider value={{
            currentIndex,
            setIndex
        }}>
            {children}
        </Context.Provider>
    )
}

const Mailbox = ({ mailbox }) => {
    const { isOpen, isMinimized, isMaximized, x, y, width, height, appName } = mailbox;
    return(
        <App isOpen={isOpen} isMinimized={isMinimized} isMaximized={isMaximized} x={x} y={y} width={width} height={height} appName={appName}>
            <Wizard>
                <Sidebar />
                <Content>
                    {messages.map((elem) => {
                        if(elem.id === 0){
                            return (
                                <MailboxForm key={elem.id} />
                            );
                        } return (
                            <MessageContainer key={elem.id}>
                                <Title>{elem.title}</Title>
                                <From>New message from: {elem.from}</From>
                                <Message>{elem.message}</Message>
                            </MessageContainer>
                        );
                    })} 
                </Content>
            </Wizard>
        </App>
    );
}

const mapStateToProps = ({ mailbox }) => ({ mailbox });

export default connect(mapStateToProps)(Mailbox);
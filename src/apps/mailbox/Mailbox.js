import React, { createContext, useContext, useState } from 'react';
import SidebarStyled from 'components/desktop/atoms/SidebarStyled';
import { connect } from 'react-redux';
import App from 'apps/App';
import ContentStyled from 'components/desktop/atoms/ContentStyled';
import Child from 'components/desktop/atoms/Child';
import MailboxItem from 'components/desktop/molecules/MailboxItem';
import MailboxForm from 'components/desktop/organisms/MailboxForm';
import icon from 'assets/img/apps/mailbox.svg';
import { messages } from 'apps/mailbox/messages';
import { MessageContainer, Title, From, Message } from './styles';

const Context = createContext({
    currentIndex: null,
    setIndex: () => {},
});

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
        <App isOpen={isOpen} isMinimized={isMinimized} isMaximized={isMaximized} x={x} y={y} width={width} height={height} appName={appName} icon={icon}>
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

const mapStateToProps = (state) => {
    return {
        mailbox: state.appsReducer.mailbox
    }
}

export default connect(mapStateToProps)(Mailbox);
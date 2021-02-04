import React, { useState, createContext, useContext } from 'react';
import MobileApp from 'apps/MobileApp';
import { connect } from 'react-redux';
// import plus from 'assets/img/symbolic/plus.svg';
import { ReactComponent as Compose } from 'assets/img/symbolic/compose.svg';
import { ReactComponent as Mail } from 'assets/img/symbolic/mail.svg';
import BottomBar from 'components/mobile/atoms/BottomBar';
import Button from 'components/mobile/atoms/Button';
import MailboxForm from 'components/mobile/organisms/MailboxForm';
import { messages } from 'apps/mailbox/messages';
import Message from 'components/mobile/molecules/Message';
import MessageDetails from 'components/mobile/molecules/MessageDetails';
import { Mailbox, Home } from './styles';

const Context = createContext({
    currentIndex: 1,
    setIndex: () => {}
});

const MailboxHome = () => {
    const { setIndex } = useContext(Context);
    return (
        <Home>
            <h1>Received:</h1>
            {messages.map((e) => {
                if(e.id !== 0){
                    return (
                        <Message onClick={() => setIndex(e.id + 1)} key={e.id} {...e} />
                    );
                }
                return null;
            })}
        </Home>
    )
}

const Content = () => {
    const { currentIndex, setIndex } = useContext(Context);

    const elements = messages.filter((e) => e.id > 0).map((e) => {
        if(e.id === 0) {
            return null;
        } return <MessageDetails onClick={() => setIndex(0)} {...e} key={e.id} />
    });

    elements.unshift(<MailboxHome/>, <Composer/>);

    return (
        <Mailbox>
            {elements[currentIndex]}
        </Mailbox>
    )
}

const Composer = () => {
    const { setIndex } = useContext(Context);
    return (
        <MailboxForm onClick={() => setIndex(0)} />
    )
}

const NavBar = () => {
    const { currentIndex, setIndex } = useContext(Context);
    return (
        <BottomBar>
            <Button opacity={currentIndex !== 1 ? '1' : '0.6'} onClick={() => setIndex(0)}>
                <Mail fill={currentIndex !== 1 && 'red'}/>
                <h1 style={{ color: currentIndex !== 1 ? 'red' : 'black'}}>Mail</h1>
            </Button>
            <Button opacity={currentIndex === 1 ? '1' : '0.6'} onClick={() => setIndex(1)}>
                <Compose fill={currentIndex === 1 ? 'red' : 'black'}/>
                <h1 style={{ color: currentIndex === 1 && 'red' }}>Compose</h1>
            </Button>
        </BottomBar>
    )
}

const Wizard = ({ children }) => {
    const [ currentIndex, setIndex ] = useState(0);
    return(
        <Context.Provider value={{
            currentIndex,
            setIndex
        }} style={{ display: 'flex', flexDirection: 'column' }}>
            {children}
        </Context.Provider>
    )
}


const MailboxMobile = ({ mailbox }) => {
    const { isOpen, isMinimized } = mailbox;
    return (
        <MobileApp isOpen={isOpen} isMinimized={isMinimized}>
            <Wizard>
                <Content />
                <NavBar />
            </Wizard>
        </MobileApp>
    )
}

const mapStateToProps = (state) => {
    return {
        mailbox: state.appsReducer.mailbox
    }
}

export default connect(mapStateToProps)(MailboxMobile);
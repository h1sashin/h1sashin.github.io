import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import store from 'store';
import { removeNotification } from 'actions';

const StyledNotification = styled.div`
    width: 16vw;
    background: red;
    display: flex;
    flex-direction: column;
    transition: .25s;
    transform: translateX(150%);
    margin: 16px;
    border: 1px solid ${props => props.primary};
    border-radius: ${props => props.theme.style.appRadius}px;
    color: ${props => props.theme.mode.text};
    background: ${props => props.theme.mode.secondary};
`;

const TopBar = styled.div`
    width: calc(100% - 32px);
    display: flex;
    height: 4vh;
    align-items: center;
    padding: 4px 16px;
`;

const Title = styled.h1`
    font-size: 2vh;
    font-weight: 500;
`;

const Message = styled.h2`
    width: calc(100% - 32px);
    font-size: 1.5vh;
    padding: 4px 16px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-weight: 300;
`;

const Notification = ({ title, message, id, themeState }) => {
    let inputRef = null;

    const setInputRef = element => {
        inputRef = element;
    }

    useEffect(() => {
        inputRef.style.transform = 'translateX(0px)';
    });

    setTimeout(() => {
        if(inputRef) {
            inputRef.style.transform = 'translateX(150%)';
        }
    }, 9750);

    const removeEarlier = () => {
        inputRef.style.transform = 'translateX(150%)';
        setTimeout(() => {
            store.dispatch(removeNotification(id));
        }, 250);
    }

    return(
        <StyledNotification ref={setInputRef} primary={themeState.primary} onClick={removeEarlier}>
            <TopBar>
                <Title>{title}</Title>
            </TopBar>
            <span style={{ height: '1px', width: 'calc(100% - 32px)', marginLeft: '16px', background: themeState.primary }} />
            <Message>{message}</Message>
        </StyledNotification>
    )
}

const mapStateToProps = (state) => {
    return {
        themeState: state.themeReducer
    }
}

export default connect(mapStateToProps)(Notification);
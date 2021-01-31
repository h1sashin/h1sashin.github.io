import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Send} from 'assets/img/symbolic/send.svg';
import { ReactComponent as Back } from 'assets/img/symbolic/back.svg';
import { config } from 'config';
import emailjs from 'emailjs-com';

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;

const clickEffect = keyframes`
    0% {
        background: grey;
        transform: scale(0);
    }
    99% {
        transform: scale(1);
    }
    100% {
        background: white;
        scale(0);
    }
`;

const TopBar = styled.div`
    width: 100vw;
    height: 64px;
    background: white;
    display: flex;
    align-items: center;
    position: relative;
    h1 {
        font-size: 20px;
        font-weight: 500;
    }
    button {
        height: 64px;
        width: 64px;
        border: none;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            height: 40%;
            z-index: 2;
        }
        &:focus:after {
            animation: ${clickEffect} .5s linear;
        }
    
        &:after {
            content: '';
            width: 64px;
            height: 64px;
            position: absolute;
            float: center;
            border-radius: 50%;
            z-index: 1;
        }
    }
`;

const Form = styled.form`
    height: calc(100% - 64px);
    width: 100%;
    display: flex;
    flex-direction: column;
    span { 
        display: flex; 
        border-bottom: rgb(0,0,0,0.1) solid 1px;
    }
`;

const Input = styled.input`
    height: 64px;
    width: ${props => props.gotLabel ? 'calc(100% - 64px)' : 'calc(100% - 8px)'};
    border: none;
    border-bottom: ${props => props.gotLabel ? 'none' : 'rgb(0,0,0,0.1) solid 1px'};
    font-size: 1rem;
    padding-left: ${props => props.gotLabel ? '0' : '8px'};
    &::placeholder {
        font-weight: 300;
    }
`;

const TextArea = styled.textarea`
    border: none;
    min-height: calc(100% - 192px - 48px - 9px);
    width: calc(100% - 16px);
    font-size: 1rem;
    padding: 24px 8px;
`;

const Label = styled.label`
    width: 56px;
    height: 64px;
    display: flex;
    align-items: center;
    opacity: 0.5;
    padding-left: 8px;
    font-size: 16px;
    &::placeholder {
        font-size: 16px;
    }
`;

const MailboxForm = ({ onClick }) => {
    const [ from, updateFrom ] = useState('');
    const [ to, updateTo ] = useState('hiszaszin@gmail.com');
    const [ subject, updateSubject ] = useState('');
    const [ message, updateMessage ] = useState('');

    const mailData = {
        to,
        from,
        subject,
        message
    }

    const submit = (e) => {
        e.preventDefault();
        if(to === 'hiszaszin@gmail.com') {
            emailjs.send(config.serviceID, config.templateID, mailData, config.userID)
                .then((response) => {
                    console.log('Message sent!', `Message has been sent! \n Status: ${response.status} \n Text: ${response.text}`);
                }, (error) => {
                    console.log('Message send error!', `Message has been sent! \n Error: ${error}`);
                });
        } else {
            console.log('Message send error!', 'This app supports sending emails only to "hiszaszin@gmail.com"');
        }
    }

    return (
        <Content>
            <TopBar>
                <button onClick={onClick} type='button'>
                    <Back />
                </button>
                <h1>Compose</h1>
                <button form='form' type='submit' style={{ position: 'absolute', right: '0' }}>
                    <Send />
                </button>
            </TopBar>
            <Form onSubmit={(event) => submit(event)} id='form'>
                <span>
                    <Label>From:</Label>
                    <Input type='email' value={from} onChange={(e) => updateFrom(e.target.value)} gotLabel />
                </span>
                <span>
                    <Label>To:</Label>
                    <Input type='email' value={to} onChange={(e) => updateTo(e.target.value)} gotLabel />
                </span>
                <Input type='text' value={subject} onChange={(e) => updateSubject(e.target.value)} placeholder='Subject' maxLength='31'/>
                <TextArea value={message} onChange={(e) => updateMessage(e.target.value)} placeholder='Compose email' style={{ fontSize: '1rem', fontFamily: `'Ubuntu', sans-serif`, fontWeight: '300' }}/>
            </Form>
        </Content>
    )
}

export default MailboxForm;

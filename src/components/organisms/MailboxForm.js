import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { connect } from 'react-redux';
import * as notification from 'components/organisms/notifications/actions'
import { config } from 'config';

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

const MailboxForm = ({ color }) => {
    const [ to, updateTo ] = useState('hiszaszin@gmail.com');
    const [ from, updateFrom ] = useState('');
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
                    notification.display('Message sent!', `Message has been sent! \n Status: ${response.status} \n Text: ${response.text}`);
                }, (error) => {
                    notification.display('Message send error!', `Message has been sent! \n Error: ${error}`);
                });
        } else {
            notification.display('Message send error!', 'This app supports sending emails only to "hiszaszin@gmail.com"');
        }
    }

    return(
        <FormStyled id='mailbox_form' onSubmit={(event) => submit(event)}>
            <DataContainer>
                <Input type='email'>
                    <input type='email' placeholder='from:' id='from' value={from} onChange={(e) => updateFrom(e.target.value)} />
                </Input>
                <Input type='email'>
                    <input type='email' placeholder='to:' id='to' value={to} onChange={(e) => updateTo(e.target.value)} />
                </Input>
            </DataContainer>
            <Input>
                <input type='text' placeholder='title:' id='subject' value={subject} onChange={(e) => updateSubject(e.target.value)} />
            </Input>
            <Textarea>
                <textarea name='message' form='mailbox_form' value={message} onChange={(e) => updateMessage(e.target.value)} />
            </Textarea>
            <SubmitButton type='submit' value='Submit' color={color} />
        </FormStyled>
    )
}

const mapStateToProps = state => {
    return {
        color: state.themeReducer.primary
    }
}

export default connect(mapStateToProps)(MailboxForm);
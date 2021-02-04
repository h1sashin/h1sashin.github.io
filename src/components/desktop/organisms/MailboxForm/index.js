import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { connect } from 'react-redux';
import * as notification from 'components/desktop/organisms/notifications/actions'
import { config } from 'config';
import { FormStyled, SubmitButton, DataContainer, Input, Textarea } from './styles';

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
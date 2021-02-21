import React, { useState } from 'react'
import { ReactComponent as Send } from 'assets/img/symbolic/send.svg'
import { ReactComponent as Back } from 'assets/img/symbolic/back.svg'
import { config } from 'config'
import emailjs from 'emailjs-com'
import {
    Content,
    TopBar,
    Form,
    Input,
    TextArea,
    Label,
} from './styles'

const MailboxForm = ({ onClick }) => {
    const [from, updateFrom] = useState('')
    const [to, updateTo] = useState('hiszaszin@gmail.com')
    const [subject, updateSubject] = useState('')
    const [message, updateMessage] = useState('')

    const mailData = {
        to,
        from,
        subject,
        message,
    }

    const submit = e => {
        e.preventDefault()
        if (to === 'hiszaszin@gmail.com') {
            emailjs
                .send(
                    config.serviceID,
                    config.templateID,
                    mailData,
                    config.userID,
                )
                .then(
                    response => {
                        console.log(
                            'Message sent!',
                            `Message has been sent! \n Status: ${response.status} \n Text: ${response.text}`,
                        )
                    },
                    error => {
                        console.log(
                            'Message send error!',
                            `Message has been sent! \n Error: ${error}`,
                        )
                    },
                )
        } else {
            console.log(
                'Message send error!',
                'This app supports sending emails only to "hiszaszin@gmail.com"',
            )
        }
    }

    return (
        <Content>
            <TopBar>
                <button onClick={onClick} type='button'>
                    <Back />
                </button>
                <h1>Compose</h1>
                <button
                    form='form'
                    type='submit'
                    style={{ position: 'absolute', right: '0' }}
                >
                    <Send />
                </button>
            </TopBar>
            <Form onSubmit={event => submit(event)} id='form'>
                <span>
                    <Label>From:</Label>
                    <Input
                        type='email'
                        value={from}
                        onChange={e => updateFrom(e.target.value)}
                        gotLabel
                    />
                </span>
                <span>
                    <Label>To:</Label>
                    <Input
                        type='email'
                        value={to}
                        onChange={e => updateTo(e.target.value)}
                        gotLabel
                    />
                </span>
                <Input
                    type='text'
                    value={subject}
                    onChange={e => updateSubject(e.target.value)}
                    placeholder='Subject'
                    maxLength='31'
                />
                <TextArea
                    value={message}
                    onChange={e => updateMessage(e.target.value)}
                    placeholder='Compose email'
                    style={{
                        fontSize: '1rem',
                        fontFamily: `'Ubuntu', sans-serif`,
                        fontWeight: '300',
                    }}
                />
            </Form>
        </Content>
    )
}

export default MailboxForm

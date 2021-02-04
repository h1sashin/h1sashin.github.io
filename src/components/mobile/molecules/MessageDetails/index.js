import React from 'react'
import { ReactComponent as Back } from 'assets/img/symbolic/back.svg';
import Avatar from 'components/mobile/atoms/Avatar';
import { Content, TopBar, Message } from './styles';

const MessageDetails = ({ onClick, title, color, from, message }) => {
    return (
        <Content>
            <TopBar>
                <button onClick={onClick} type='button'>
                    <Back />
                </button>
                <h1>Details</h1>
            </TopBar>
            <Message>
                <h1>{title}</h1>
                <span>
                    <Avatar color={color} from={from} size='48'/>
                    <span>
                        <span style={{ marginBottom: '4px' }}>{from}</span>
                        <span style={{ fontWeight: '300', fontSize: '12px' }}>to me</span>
                    </span>
                </span>
                <div style={{ marginTop: '16px' }}>
                    {message}
                </div>
            </Message>
        </Content>
    )
}

export default MessageDetails;
import React from 'react'
import Avatar from 'components/mobile/atoms/Avatar'
import { MessageStyled } from './styles'

const Message = ({ onClick, from, title, message, color }) => {
    return (
        <MessageStyled onClick={onClick}>
            <Avatar color={color} from={from} size='64' />
            <div
                style={{
                    height: '100%',
                    width: 'calc(100% - 80px)',
                    marginLeft: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <h2>{from}</h2>
                <h3>{title}</h3>
                <h4>{message.slice(0, 32)}...</h4>
            </div>
        </MessageStyled>
    )
}

export default Message

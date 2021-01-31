import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/mobile/atoms/Avatar';

const MessageStyled = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    div {
        div {
            color: white;
        }
        h2, h3, h4 {
            margin: 0;
        }
        h2 {
            font-size: 18px;
            margin-bottom: 4px;
        }
        h3 {
            font-size: 14px;
            opacity: 0.7;
            margin-bottom: 2px;
        }
        h4 {
            font-size: 10px;
            opacity: 0.7;
        }
    }
`

const Message = ({ onClick, from, title, message, color }) => {
    return (
        <MessageStyled onClick={onClick}>
            <Avatar color={color} from={from} size='64' />
            <div style={{ height: '100%', width: 'calc(100% - 80px)', marginLeft: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2>{from}</h2>
                <h3>{title}</h3>
                <h4>{message.slice(0, 32)}...</h4>
            </div>
        </MessageStyled>
    )
}

export default Message;
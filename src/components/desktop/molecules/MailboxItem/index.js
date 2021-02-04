import React from 'react';
import { Item, Message, From } from './styles';

const MailboxItem = ({ onClick, from, message, title, index }) => {
    if(message){ 
        return(    
            <Item onClick={() => onClick(index)} index={index}>
                <span>{title}</span>
                {message === 'addNew' ? null : <Message>{message.slice(0, 18)}...</Message>}
                {from === '' ? null : <From>{from}</From>}
            </Item>
        );
    } 
    return null;
}

export default MailboxItem;
import React from 'react';
import styled, { css } from 'styled-components';

const Item = styled.div`
    position: relative;
    width: 100%;
    height: 64px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 2px 0 black;
    cursor: pointer;
    border-radius: ${props => props.theme.style.appRadius}px;
    margin-bottom: 10px;
    ${props => props.index === 0 && css`
        background-color: rgb(176,224,230, 0.3);
    `}
    align-items: ${props => props.index === 0 ? 'center' : 'flex-start'};
    justify-content: ${props => props.index !== 0 ? 'flex-start' : 'center'};
    span {
        margin: ${props => props.index !== 0 && '8px'} 0 0 ${props => props.index !== 0 && '8px'};
    }
`;

const Message = styled.span`
    font-size: 12px;
`;

const From = styled.span`
    position: absolute;
    right: 8px;
    bottom: 8px;
    font-size: 8px;
    opacity: 0.5;
`;

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
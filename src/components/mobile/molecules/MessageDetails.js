import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Back } from 'assets/img/symbolic/back.svg';
import Avatar from 'components/mobile/atoms/Avatar';

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
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
        }
        z-index: 2;
    }
`;

const Message = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    min-height: calc(100% - 64px - 32px);
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 24px;
        margin-bottom: 16px;
    }
    span {
        display: flex;
        font-size: 16px;
        span {
            margin-left: 8px;
            dispaly: flex;
            justify-content: center;
            flex-direction: column;
            font-weight: 700;
        }
    }
`;

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
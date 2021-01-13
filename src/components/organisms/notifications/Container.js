import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Notification from './Notification';

const ContainerStyled = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 99999999999999999999;
`;

const Container = ({ notifications }) => {
    return(
        <ContainerStyled>
            {notifications.map(item => {
                return (
                    item && <Notification key={item.id} {...item} />
                )
            })}
        </ContainerStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        notifications: state.notificationReducer.notifications
    }
}

export default connect(mapStateToProps)(Container);
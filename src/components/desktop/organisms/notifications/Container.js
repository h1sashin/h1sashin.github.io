import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Notification from './Notification'

const ContainerStyled = styled.div`
    position: absolute;
    right: ${props => props.theme.notifications.right};
    top: 0;
    left: ${props => props.theme.notifications.left};
    display: flex;
    flex-wrap: wrap;
    align-items: ${props => props.theme.notifications.align};
    flex-direction: ${props => props.theme.notifications.direction};
    z-index: 99999999999999999999;
    height: 100%;
`

const Container = ({ notifications }) => {
    return (
        <ContainerStyled>
            {notifications.map(item => {
                return (
                    item && <Notification key={item.id} {...item} />
                )
            })}
        </ContainerStyled>
    )
}

const mapStateToProps = state => {
    return {
        notifications: state.notificationReducer.notifications,
        position: state.themeReducer.notificationsPosition,
    }
}

export default connect(mapStateToProps)(Container)

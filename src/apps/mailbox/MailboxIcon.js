import React from 'react'
import { connect } from 'react-redux'
import Icon from 'apps/Icon'
import icon from 'assets/img/apps/mailbox.svg'

const MailboxIcon = ({ mailbox }) => {
    const { isOpen, appName } = mailbox
    return <Icon appName={appName} isActive={isOpen} icon={icon} />
}

const mapStateToProps = state => {
    return {
        mailbox: state.appsReducer.mailbox,
    }
}

export default connect(mapStateToProps)(MailboxIcon)

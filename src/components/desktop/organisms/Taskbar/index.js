import React from 'react'
import FilesIcon from 'apps/files/FilesIcon'
import SettingsIcon from 'apps/settings/SettingsIcon'
import Clock from 'components/desktop/molecules/Clock'
import MailboxIcon from 'apps/mailbox/MailboxIcon'
import ConsoleIcon from 'apps/console/ConsoleIcon'
import { connect } from 'react-redux'
import { TaskbarStyled } from './styles'

const Taskbar = ({ transparency }) => {
    return (
        <TaskbarStyled transparency={transparency}>
            <div>
                <FilesIcon />
                <MailboxIcon />
                <ConsoleIcon />
                <SettingsIcon />
            </div>
            <Clock />
        </TaskbarStyled>
    )
}

const mapStateToProps = state => {
    return {
        transparency: state.themeReducer.taskbarTransparency,
    }
}

export default connect(mapStateToProps)(Taskbar)

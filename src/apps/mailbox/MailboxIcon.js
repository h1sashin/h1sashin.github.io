import React from 'react';
import { connect } from 'react-redux';
import Icon from 'apps/Icon';

const MailboxIcon = ({ mailbox }) => {
    const { isOpen, appName } = mailbox;
    return(
        <Icon appName={appName} isActive={isOpen} />
    );
}

const mapStateToProps = ({ mailbox }) => ({ mailbox });

export default connect(mapStateToProps)(MailboxIcon);
import React from 'react';
import NavButton from 'components/mobile/atoms/NavButton';
import { connect } from 'react-redux';
import { closeAllApps } from 'actions';
import menu from 'assets/img/symbolic/mobile-navigate_menu.svg';
import back from 'assets/img/symbolic/mobile-navigate_back.svg';
import home from 'assets/img/symbolic/mobile-navigate_home.svg';
import { Nav, Container } from './styles';

// eslint-disable-next-line no-shadow
const MobileNav = ({ closeAllApps }) => {
    return (
        <Nav>
            <Container>
                <NavButton img={back} action='none' disabled />
                <NavButton img={home} onClick={closeAllApps} action='home' />
                <NavButton img={menu} onClick={() => console.log('Apps')} action='menu' />
            </Container>
        </Nav>
    );
}

const mapDispatchToProps = dispatch => ({
    closeAllApps: () => dispatch(closeAllApps())
});


export default connect(null, mapDispatchToProps)(MobileNav);
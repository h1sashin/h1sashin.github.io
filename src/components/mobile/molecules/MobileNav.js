import React from 'react';
import styled from 'styled-components';
import NavButton from 'components/mobile/atoms/NavButton';
import { connect } from 'react-redux';
import { closeAllApps } from 'actions';
import menu from 'assets/img/symbolic/mobile-navigate_menu.svg';
import back from 'assets/img/symbolic/mobile-navigate_back.svg';
import home from 'assets/img/symbolic/mobile-navigate_home.svg';

const Nav = styled.nav`
    width: 100vw;
    height: 48px;
    background: black;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    z-index: 99999;
`;

const Container = styled.div`
    width: 100%;
    max-width: 320px;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-around;
`;

// eslint-disable-next-line no-shadow
const MobileNav = ({ closeAllApps }) => {
    return (
        <Nav>
            <Container>
                <NavButton img={back} onClick={() => console.log('Back')} action='back' />
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
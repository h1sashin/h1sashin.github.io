import styled from 'styled-components';

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

export { Nav, Container };
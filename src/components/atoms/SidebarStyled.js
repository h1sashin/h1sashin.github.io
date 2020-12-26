import styled from 'styled-components';
import main from 'assets/img/files/folder-black.svg';

const SidebarStyled = styled.div`
    left: 0;
    top: 0;
    width: calc(256px - 32px);
    height: calc(100% - 64px);
    padding: 32px 16px;
    color: #FFFFFF;
    font-size: 16px;
    background: #000000;
    overflow: auto;
    position: sticky;
    box-shadow: 0 0 20px 0 black;
    h1, h3 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &:before {
            margin-right: 10px;
            content: '';
            display: inline-block;
            height: 22px;
            width: 22px;
            background-image: url(${main});
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            font-weight: 700;
            font-family: 'Ubuntu', sans-serif;
        }
    }

    h1 {
        font-size: 1em;
    }

    h3 {
        font-size: 1em;
        margin-left: 10px;
    }
`;

export default SidebarStyled;
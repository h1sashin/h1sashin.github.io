import styled, { css } from 'styled-components';
import file from 'assets/img/places/dir.svg';

const Grid = styled.div`
    width: 100%;
    height: calc(100% - 96px - 64px);
    display: grid;
    align-content: flex-start;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(90px, 125px));
    grid-template-rows: repeat(auto-fill, minmax(90px, 125px));
    align-items: center;
    justify-items: center;
    position: relative;
`;

const Button = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    margin: 0;
    margin-left: -35px;
    color: ${props => props.theme.mode.text};
    ${props => props.portfolio && css`
        margin-left: -10px;
    `}
    ${props => props.resume && css`
        margin-left: -20px;
    `}
    li {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: -15px;
        &:before {
            margin-right: 5px;
            content: '';
            display: inline-block;
            height: 20px;
            width: 20px;
            background-image: url(${file});
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
        font-weight: 700;
        font-family: 'Ubuntu', sans-serif;
    }
`;

const Portfolio = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 80%;
    }
`;

const TopBar = styled.div`
    width: 100%;
    height: 32px;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: none;
    h6 {
        font-size: 1em;
        margin-right: 20px;
    }
    background: ${props => props.theme.mode.primary};
    color: ${props => props.theme.mode.text};
`;

const Link = styled.a`
    margin-right: 20px;
    ${props => props.linkExists === '' && css`
        text-decoration: line-through;
        color: ${props.theme.mode.text};
    `}
`;

const Skill = styled.div`
    position: relative;
    height: 128px;
    width: 128px;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    color: ${props => props.theme.mode.text};
    img {
        height: 75%;
    }
    h3 {
        font-size: 16px;
    }
`;

const Skills = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 72px);
    height: calc(100% - 72px);
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fit, 128px);
    grid-template-rows: repeat(auto-fill, 128px);
    padding: 36px;
`;

const CardContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 72px);
    height: calc(100% - 72px);
    padding: 36px;
    display: grid;
    grid-gap: 96px;
    grid-template-columns: repeat(auto-fit, 384px);
    grid-template-rows: repeat(auto-fill, 196px);
`;

const Card = styled.div`
    width: 384px;
    height: 196px;
    background: #878f99;
    padding: 16px;
    position: relative;
    box-shadow: 0 0 10px 0 black;
    div {
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            h1 {
                margin: 0;
                padding: 0;
            }
            img {
                align-self: flex-start;
                width: 72px;
            }
        }
        h2,h3 {
            margin: 0;
            padding: 0;
            font-weight: 500;
        }
        h3 {
            font-weight: 300;
            font-size: 1em;
        }
    }
    h4 {
        margin: 0;
        padding: 0;
        position: absolute;
        left: 16px;
        bottom: 16px;
    }
    a {
        text-decoration: underline;
        position: absolute;
        right: 16px;
        bottom: 16px;
    }
`;


export { Grid, Button, Portfolio, TopBar, Link, Skill, Skills, CardContainer, Card };

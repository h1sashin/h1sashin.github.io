import styled, { css } from 'styled-components';

const Styled = styled.div`
    position: absolute;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    padding: 16px;
    display: grid;
    grid-template-columns: 64px auto;
    grid-template-rows: 64px auto;
    ${props => props.nogrid && css`
        display: inline-block;
        padding: 0;
        margin: 0;
        img {
            width: 100%;
            box-shadow: 0 0 16px 1px rgb(0, 0, 0);
        }
    `}
`;

const Link = styled.a`
    background: transparent;
    box-shadow: 0 0 0 0 black;
    position: relative;
    svg {
        height: 48px;
        width: 48px;
    }
`;

const About = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto 64px;
    grid-template-rows: auto 64px;
    justify-content: center;
    align-content: center;
    * {
        padding: 8px;
    }
    a {
        padding: 0;
    }
`;

const Name = styled.h1`
    width: calc(100% - 32px);
    height: 100%;
    padding-left: 32px;
    display: flex;
    align-items: center;
`;

const AdditionalContainer = styled.div`
    width: calc(100% - 64px);
    height: calc(100% - 64px);
    padding: 32px;
    h2 {
        padding: 0;
        margin: 0;
        font-size: 24px;
        margin-bottom: 8px;
    }
    span {
        font-size: 20px;
        margin-left: 16px;
    }
`;

const Level = styled.div`
    width: 100%;
    height: 224px;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 32px;
    text-align: center;
    span {
        writing-mode: vertical-rl;
        text-orientation: upright;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const Image = styled.img`
    justify-self: center;
    align-self: center;
    ${props => props.tooWide ? css`
        width: 100%
    ` : css`
        height: 100%;
    `}
`;

const LevelBar = styled.div`
    height: 196px;
    width: 8px;
    background: linen;
    border-radius: 16px;
    position: relative;
    justify-self: center;
    margin-top: 16px;
    border: 1px lightgrey solid;
    &:after {
        content: '';
        width: inherit;
        position: absolute;
        bottom: 0;
        left: 0;
        background: cornflowerblue;
        border-radius: 16px;
        height: ${props => 20 * props.level }%;
    }
`;

export { Styled, Name, AdditionalContainer, Level, LevelBar, Image, About, Link };
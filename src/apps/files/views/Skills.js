import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
    position: absolute;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    padding: 16px;
    display: grid;
    grid-template-columns: 64px auto;
    grid-template-rows: 64px auto;
`;

const SkillName = styled.h1`
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

const LevelBar = styled.tr`
    height: 196px;
    width: 8px;
    background: linen;
    border-radius: 16px;
    position: relative;
    justify-self: center;
    margin-top: 32px;
    border: 1px lightgrey solid;
    &:after {
        content: '';
        width: inherit;
        position: absolute;
        bottom: 0;
        background: cornflowerblue;
        border-radius: 16px;
        height: ${props => 20 * props.level }%;
    }
`;

const SkillLevel = styled.div`
    width: 100%;
    height: 228px;
    display: flex;
    justify-content: center;
    position: relative;
    span {
        writing-mode: vertical-rl;
        text-orientation: upright;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const SkillImage = styled.img`
    height: 100%;
    justify-self: center;
`;

const Skills = ({ image, name, data }) => {
    const { level, additional } = data;
    return (
        <Styled>
            <SkillImage src={image} alt={`${name} logo`} />
            <SkillName>{name}</SkillName>
            <SkillLevel>
                <span>level</span>
                <LevelBar level={level} />
            </SkillLevel>
            {additional && <AdditionalContainer>
                <h2>Additional:</h2>
                {additional.map(item => {
                    return <><span key={item}>- {item}</span><br /></>
                })}
            </AdditionalContainer>}
        </Styled>
    )
}

export default Skills;
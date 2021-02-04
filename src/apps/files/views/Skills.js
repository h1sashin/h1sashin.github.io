import React from 'react';
import { Styled, Name, AdditionalContainer, Level, LevelBar, Image } from 'apps/files/views/styles';

const Skills = ({ image, name, data }) => {
    const { level, additional } = data;
    return (
        <Styled>
            <Image src={image} alt={`${name} logo`} />
            <Name>{name}</Name>
            <Level>
                <span>level</span>
                <LevelBar level={level} />
            </Level>
            {additional && <AdditionalContainer>
                <h2>Additional:</h2>
                {additional.map(item => {
                    return <span key={item}>- {item}<br /></span>
                })}
            </AdditionalContainer>}
        </Styled>
    )
}

export default Skills;
import React from 'react';
import { Styled, Name, AdditionalContainer, Level, Image } from 'apps/files/views/styles';

const Experience = ({ image, name, data }) => {
    const { year, field } = data;
    return (
        <Styled>
            <Image src={image} alt={`${name} logo`} />
            <Name>{name}</Name>
            <Level>
                {year}
            </Level>
            <AdditionalContainer>
                <h2>Field</h2>
                <span>- {field}</span>
            </AdditionalContainer>
        </Styled>
    )
}

export default Experience;
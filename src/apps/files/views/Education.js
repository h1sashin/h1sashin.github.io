import React from 'react';
import { Styled, Name, AdditionalContainer, Level, Image } from 'apps/files/views/styles';


const Education = ({ image, name, data }) => {
    const { yearsFrom, yearsTo, field } = data;
    return (
        <Styled>
            <Image src={image} alt={`${name} logo`} />
            <Name>{name}</Name>
            <Level>
                {yearsFrom}
                <br />
                -
                < br />
                {yearsTo}
            </Level>
            <AdditionalContainer>
                <h2>Field</h2>
                <span>- {field}</span>
            </AdditionalContainer>
        </Styled>
    )
}

export default Education;
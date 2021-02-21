import React from 'react'
import { isMobile } from 'react-device-detect'
import {
    Mobile,
    Name,
    AdditionalContainer,
    Level,
    Image,
} from './stylesMobile'
import { Desktop } from './stylesDesktop'

const Education = ({ image, name, data }) => {
    const { yearsFrom, yearsTo, field } = data
    if (isMobile)
        return (
            <Mobile>
                <Image src={image} alt={`${name} logo`} />
                <Name>{name}</Name>
                <Level>
                    {yearsFrom}
                    <br />
                    -
                    <br />
                    {yearsTo}
                </Level>
                <AdditionalContainer>
                    <h2>Field</h2>
                    <span>- {field}</span>
                </AdditionalContainer>
            </Mobile>
        )
    return (
        <Desktop littleGrid>
            <Image src={image} alt={`${name} logo`} />
            <Name>{name}</Name>
            <Level>
                {yearsFrom}
                <br />
                -
                <br />
                {yearsTo}
            </Level>
            <AdditionalContainer>
                <h2>Field</h2>
                <span>- {field}</span>
            </AdditionalContainer>
        </Desktop>
    )
}

export default Education

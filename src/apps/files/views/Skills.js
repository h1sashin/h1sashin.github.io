import React from 'react'
import { isMobile } from 'react-device-detect'
import {
    Mobile,
    Name,
    AdditionalContainer,
    Level,
    LevelBar,
    Image,
} from './stylesMobile'
import { Desktop } from './stylesDesktop'

const Skills = ({ image, name, data }) => {
    const { level, additional } = data
    if (isMobile)
        return (
            <Mobile>
                <Image src={image} alt={`${name} logo`} />
                <Name>{name}</Name>
                <Level>
                    <span>level</span>
                    <LevelBar level={level} />
                </Level>
                {additional && (
                    <AdditionalContainer>
                        <h2>Additional:</h2>
                        {additional.map(item => {
                            return (
                                <span key={item}>
                                    - {item}
                                    <br />
                                </span>
                            )
                        })}
                    </AdditionalContainer>
                )}
            </Mobile>
        )
    return (
        <Desktop littleGrid>
            <Image src={image} alt={`${name} logo`} />
            <Name>{name}</Name>
            <Level>
                <span>level</span>
                <LevelBar level={level} />
            </Level>
            {additional && (
                <AdditionalContainer>
                    <h2>Additional:</h2>
                    {additional.map(item => {
                        return (
                            <span key={item}>
                                - {item}
                                <br />
                            </span>
                        )
                    })}
                </AdditionalContainer>
            )}
        </Desktop>
    )
}

export default Skills

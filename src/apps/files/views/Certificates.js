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

const Certificates = ({ image, name, data }) => {
    const { acquired, including } = data
    if (isMobile)
        return (
            <Mobile>
                <Image src={image} alt={`${name} logo`} tooWide />
                <Name>{name}</Name>
                <Level>{acquired}</Level>
                <AdditionalContainer>
                    <h2>Including</h2>
                    {including.map(item => {
                        return (
                            <span key={item}>
                                - {item}
                                <br />
                            </span>
                        )
                    })}
                </AdditionalContainer>
            </Mobile>
        )
    return (
        <Desktop littleGrid>
            <Image src={image} alt={`${name} logo`} tooWide />
            <Name>{name}</Name>
            <Level>{acquired}</Level>
            <AdditionalContainer>
                <h2>Including</h2>
                {including.map(item => {
                    return (
                        <span key={item}>
                            - {item}
                            <br />
                        </span>
                    )
                })}
            </AdditionalContainer>
        </Desktop>
    )
}

export default Certificates

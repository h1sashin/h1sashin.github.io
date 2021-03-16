import React from 'react'
import { isMobile } from 'react-device-detect'
import { ReactComponent as GitHub } from 'assets/img/buttons/github.svg'
import { ReactComponent as Live } from 'assets/img/buttons/live.svg'
import { Mobile, About, Link } from './stylesMobile'
import { Desktop, App } from './stylesDesktop'

const Portfolio = ({ image, name, data }) => {
    const { about, github, live } = data

    if (isMobile)
        return (
            <Mobile nogrid flex>
                {image === '' ? (
                    <h1
                        style={{
                            height: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        No preview available
                    </h1>
                ) : (
                    <img src={image} alt={name} />
                )}
                <About>
                    <h1>{name}</h1>
                    <Link href={github} target='_blank'>
                        <GitHub />
                    </Link>
                    <div>{about}</div>
                    <Link href={live} target='_blank'>
                        <Live />
                    </Link>
                </About>
            </Mobile>
        )
    return (
        <Desktop>
            <App>
                <h1>{name}</h1>
                <Link href={github} target='_blank'>
                    <GitHub />
                </Link>
                <div>{about}</div>
                <Link href={live} target='_blank'>
                    <Live />
                </Link>
            </App>
            {image === '' ? (
                <h1 style={{ height: '50%' }}>
                    No preview available
                </h1>
            ) : (
                <img src={image} alt={name} />
            )}
        </Desktop>
    )
}

export default Portfolio

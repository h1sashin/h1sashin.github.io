import React from 'react';
import { ReactComponent as GitHub } from 'assets/img/buttons/github.svg';
import { ReactComponent as Live } from 'assets/img/buttons/live.svg';
import { Styled, About, Link } from './styles';

const Portfolio = ({ image, name, data }) => {
    const { about, github, live } = data;
    return (
        <Styled nogrid flex>
            <img src={image} alt={name} />
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
        </Styled>
    );
}

export default Portfolio;
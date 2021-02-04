import React from 'react';
import { Styled, Name, AdditionalContainer, Level, Image } from 'apps/files/views/styles';


const Certificates = ({ image, name, data }) => {
    const { acquired, including } = data;
    return (
        <Styled>
            <Image src={image} alt={`${name} logo`} tooWide/>
            <Name>{name}</Name>
            <Level>
                {acquired}
            </Level>
            <AdditionalContainer>
                <h2>Including</h2>
                {including.map((item) => {
                    return <span key={item}>- {item}<br /></span>
                })}
            </AdditionalContainer>
        </Styled>
    )
}

export default Certificates;
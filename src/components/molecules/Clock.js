import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ClockStyled = styled.div`
    font-size: 1em;
    height: 100%;
    display: flex;
    align-items: center;
`;

const Clock = () => {
    const [ date, updateDate ] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            updateDate(new Date());
        }, 60000);
    });

    const addZero = (target) => {
        if(target < 10){
            return `0${target}`;
        }
        return target;
    }
    
    
    return(
        <ClockStyled>
            {addZero(date.getHours())} : {addZero(date.getMinutes())}
        </ClockStyled>
    )
}

export default Clock;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const ClockStyled = styled.div`
    font-size: 1em;
    height: 100%;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
        font-size: 0.5em;
    }
`;

const Clock = ({ dateFormat, dateHide }) => {
    const [ date, updateDate ] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            updateDate(new Date());
        }, 60000);
    });

    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let currentTime = null;
    if(dateFormat === '12h'){
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours %= 12;
        hours = hours || 12;
        currentTime = `${hours} : ${minutes} ${ampm}`;
    } else {
        currentTime = `${hours < 10 ? `0${hours}` : hours} : ${minutes}`;
    }

    const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    const currentDate = `${dateFormat === '12h' ? `${month}.${day}` : `${day}.${month}`}.${year}`
    return(
        <ClockStyled>
            {currentTime}
            {dateHide === 'show' && <span>{currentDate}</span>}
        </ClockStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        dateFormat: state.themeReducer.dateFormat,
        dateHide: state.themeReducer.dateHide
    }
}

export default connect(mapStateToProps)(Clock);
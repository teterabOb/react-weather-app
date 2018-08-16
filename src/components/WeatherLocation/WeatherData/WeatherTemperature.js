import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'
import {
CLOUD,
CLOUDY, 
SUN, 
RAIN,
SNOW, 
WINDY, 
THUNDER, 
DRIZZLE  } from './../../../constants/weathers';


const stateIconName = weatherState => {
    switch (weatherState) {
        case CLOUD :
            return 'cloud';
        case CLOUDY :
            return 'cloudy';
        case SUN :
            return 'day-sunny';
        case RAIN :
            return 'rain';
        case SNOW:
            return 'snow';
        case WINDY:
            return 'windy';
        case THUNDER:
            return 'day-thunderstorm';
        case DRIZZLE:
            return 'day-showers';
        default:
            return 'say-sunny';
    }
}
const weatherIconState = weatherState => { //Si la arrow function tiene solo un parametro se puede dejar sin parentesis
    return (<WeatherIcons name={stateIconName(weatherState)} size="2x" />)
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {weatherIconState(weatherState)}
        <span> {`${temperature}`}</span>

    </div>
);

WeatherTemperature.propTypes = { 
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
}

export default WeatherTemperature;
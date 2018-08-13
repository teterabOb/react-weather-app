import React from 'react';
import WeatherIcons from 'react-weathericons';
import { SNOW } from './../../../constants/weathers';
import PropTypes from 'prop-types'
import './styles.css';


const stateIconName = weatherState => {
    switch (weatherState) {
        case 'cloud':
            return 'cloud';
        case 'cloudy':
            return 'cloudy';
        case 'sun':
            return 'day-sunny';
        case 'rain':
            return 'rain';
        case SNOW:
            return 'snow';
        case 'windy':
            return 'windy';
        default:
            return 'say-sunny';
    }
}
const weatherIconState = weatherState => { //Si la arrow function tiene solo un parametro se puede dejar sin parentesis
    return (<WeatherIcons  className="wIcon" name={stateIconName(weatherState)} size="3x" />)
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTempCont">
        {weatherIconState(weatherState)}
        <span className="temperature"> {`${temperature} `}</span>
        <span className="temperatureType">ºC</span>

    </div>
);

WeatherTemperature.propTypes = { 
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
}

export default WeatherTemperature;
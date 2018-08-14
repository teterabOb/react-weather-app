import React, { Component } from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types'


class WeatherData extends Component {
    
    render = ({ data }) => {
        const { temperature, weatherState, humidity, wind } = data;
        return (
            <div>
                <WeatherTemperature temperature={temperature} weatherState={weatherState} />
                <WeatherExtraInfo humidity={humidity} wind={wind} />
            </div>
        )
    };
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }),
}

export default WeatherData;
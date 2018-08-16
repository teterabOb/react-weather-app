import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'
import { SNOW } from './../../constants/weathers'
import PropTypes from 'prop-types'

const api_key = "0a73711b0e226e5ae343f3bb397e6b24"; 
const url = "https://samples.openweathermap.org/data/2.5/weather?q=";

class WeatherLocation extends Component {

    constructor({ city }){
        super();
        this.state = {
            city,
            data: null
        }
    }

    getWeatherState = weather => {
        return SNOW;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`
        }
        return data;
    }

    componentWillMount = () => {
        const { city } = this.state;
        const url_api_weather = `${url}${city}&appid=${api_key}`;

        fetch(url_api_weather)
        .then((response) => {
            return response.json()
        })
        .then(obj => {
            const data =  this.getData(obj);
            this.setState({ data })
        });
    }
   
    render = () => {
        const { city, data } = this.state;
        return (<div>
            <Location city={ city } />
            { data ? <WeatherData data={ data } /> : 'Cargando...' }  
        </div>);
    };
}

WeatherLocation.propTypes = {
    city : PropTypes.string,
}

export default WeatherLocation;
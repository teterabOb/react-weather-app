import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'
import { SNOW } from './../../constants/weathers'

const data1 = {
    temperature: 20,
    weatherState: SNOW,
    humidity: 80,
    wind: '10 m/s'
}


const location = "London"
const api_key = "0a73711b0e226e5ae343f3bb397e6b24";
const url_api_weather = `https://samples.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: data1
        };
    }

    getWeatherState = weather => {
        return SNOW;
    }

    getData = weather_data => {
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState  = this.getWeatherState(this.weather);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`
        }

        return data;
    }



    handleUpdateClick = () => {
        fetch(url_api_weather)
            .then((recurso) => {
                const data = this.getData(recurso);
                this.setState({ data })
                console.log(recurso)

            })


    }

    render = () => {
        const { city, data } = this.state;
        return (<div>
            <Location city={city} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>)
    };
}

export default WeatherLocation;
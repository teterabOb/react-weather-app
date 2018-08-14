import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'
import { SNOW } from './../../constants/weathers'


const location = "London"
const api_key = "0a73711b0e226e5ae343f3bb397e6b24"; //http://api.apixu.com/v1/current.json?key=f99bf1b937bc45888c235351181408&q=Paris

const url_api_weather = `https://samples.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Santiago",
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
      this.handleUpdateClick()
    }
    

    handleUpdateClick = () => {
        fetch(url_api_weather)
            .then((response) => {
                return response.json()
            })
            .then(obj => {
                const data =  this.getData(obj);
                this.setState({ data })
                console.log(data)
            });
    };
   
    render = () => {
        const { city, data } = this.state;
        return (<div>
            <Location city={ city } />
            { data ? <WeatherData data={ data } /> : 'Cargando...' }
            
        </div>);
    };
}

export default WeatherLocation;
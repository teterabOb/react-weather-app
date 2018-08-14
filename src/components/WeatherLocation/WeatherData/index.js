import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types'

const WeatherData  = ({ data }) =>  {     
        const { temperature, weatherState, humidity, wind } = data;
        return (<div>
                <WeatherTemperature temperature={temperature} weatherState={weatherState} />
                <WeatherExtraInfo humidity={humidity} wind={wind} />
            </div>);
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

/*
const location = "London"
const api_key = "0a73711b0e226e5ae343f3bb397e6b24";
const url_api_weather = `https://samples.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
*/


   /*
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
 

  handleUpdateClick = () => {
      fetch(url_api_weather)
          .then((recurso) => {
              const data = this.getData(recurso);
              this.setState({ data })
              console.log(recurso)

          });
  };
   */
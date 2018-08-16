import React from 'react'
import WeatherLocation from '../WeatherLocation';

const LocationList = () => {
    return (
    <div>
        <WeatherLocation city={"Buenos Aires,ar"}/>
        <WeatherLocation city={"Santiago,cl"}/>
        <WeatherLocation city={"Bogotá,col"}/>
    </div>
    );
}

export default LocationList
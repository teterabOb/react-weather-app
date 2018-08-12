import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import registerServiceWorker from './registerServiceWorker';
import WeatherLocation from './components/WeatherLocation';

ReactDOM.render(<WeatherLocation />, document.getElementById('root'));
registerServiceWorker();

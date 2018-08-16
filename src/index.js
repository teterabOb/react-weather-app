import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import registerServiceWorker from './registerServiceWorker';
import LocationList from './components/LocationList/LocationList';

const cities = [
    'Buenos Aires,ar',
    'Santiago,cl',
    'Bogotá,col',
    'Washington,us',
    'Madrid,es'
  ];

ReactDOM.render(<LocationList cities={cities}/>, document.getElementById('root'));
registerServiceWorker();

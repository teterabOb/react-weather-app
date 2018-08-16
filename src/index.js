import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import registerServiceWorker from './registerServiceWorker';
import LocationList from './components/LocationList/LocationList';

ReactDOM.render(<LocationList />, document.getElementById('root'));
registerServiceWorker();

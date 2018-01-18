import React from 'react'; 
import ReactDOM from 'react-dom';
// import { HashRouter, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

import Route from './router/router.jsx'
// import Home from './pages/home/home.jsx'; 

import './style/reset.css'; 


ReactDOM.render(<Route/>, document.getElementById('root'));
registerServiceWorker();

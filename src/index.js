import React from 'react'; 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Route from './router/router.jsx'
import store from '@/redux/store'

import './style/reset.css'; 


ReactDOM.render(
    <Provider store={store}>
        <Route/>
    </Provider>
    , document.getElementById('root')
);

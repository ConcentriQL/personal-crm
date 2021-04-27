import React from 'react';
import { render } from 'react-dom';
//Import Provider for Redux
import { Provider } from 'react-redux';
//Import App.jsx
import App from './App.jsx'
//Import Store
import store from './store.js';
//import style file here for webpack to configure it into bundle.js
import style from '../styles.scss';


render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

//Hello Team Front End! We used redux for our front end, most of what is rendering will be in MainContainer.jsx, Touch Event and Contacts are almost the same files and do the same things
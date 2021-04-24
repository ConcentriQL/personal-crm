import React from 'react';
import { render } from 'react-dom';
//Import Provider for Redux
import { Provider } from 'react-redux';
//Import App.jsx
import App from './components/App.jsx'
//Import Store
import store from './store.js';
//import style file here for webpack to configure it into bundle.js

render(
    <Proivder store = {store}>
        <App />,
    </Proivder>,
    document.getElementById('root')
);
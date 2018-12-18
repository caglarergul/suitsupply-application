import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = (
    // Handle BrowserRouter from App.js

        <App/>

);
ReactDOM.render(
    app,
    document.getElementById('root')
);
registerServiceWorker();
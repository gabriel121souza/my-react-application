import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './include/bootstrap'
import * as serviceWorker from './serviceWorker';
import { browserRouter, BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
    document.getElementById('root'));


serviceWorker.unregister();

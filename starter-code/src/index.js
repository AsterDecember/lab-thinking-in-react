import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//change the routes to use React-Router
import {BrowserRouter} from "react-router-dom";
//create a component of Router
const WithRouter = () => <BrowserRouter><App/></BrowserRouter>
//use it as the father of all the react app
ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
import 'normalize.css/normalize.css'

import Portfolio from './components/Portfolio'



console.log("Running from script");
var appRoot = document.getElementById("app");
ReactDOM.render(<Portfolio/>, appRoot);

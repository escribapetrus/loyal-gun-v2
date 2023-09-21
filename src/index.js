import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/BIRTH_OF_A_HERO.ttf';
import './fonts/Oswald-Regular.ttf';
import "bootstrap/scss/bootstrap.scss"
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

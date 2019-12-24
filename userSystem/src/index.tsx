import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './style/reset.scss'
import './style/style.scss'
import {Provider} from 'react-redux'
import store from './store'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// import HttpRequest from './ajax'

// HttpRequest.get('/test.json',{
//     params:{
//         a:2,
//         b:3
//     }})
// .then(response=>{
//     console.log(response);
// })
// .catch(error=>{
//     console.log(error);
    
// })

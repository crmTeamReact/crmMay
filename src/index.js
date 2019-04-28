import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

import {Provider} from 'react-redux'
import store from './store'

import {userLoggedIn} from './actions/usersActions'


if(localStorage.token){
    store.dispatch(userLoggedIn({token: localStorage.token}))
}


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App}></Route>
        </Provider>
    </BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Test commit
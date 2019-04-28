import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom'

import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import LoginPage from './components/pages/loginPage';
import Dashboard from './components/pages/dashboard';
import HomePage from './components/pages/homePage';
import HomeRoute from './components/routes/homeRoute';
import GuestRoute from './components/routes/guestRoute';

class App extends Component {
  render() {
    const {location} = this.props;
    return (
      <div>
        <Route location={location} exact path='/' component={Dashboard}></Route>
        <GuestRoute location={location} exact path='/login' component={LoginPage}></GuestRoute>
        <HomeRoute location={location} exact path='/home' component={HomePage}></HomeRoute>
      </div>
      
      // <div id="container" className="d-flex flex-column" style={{height: '100vh'}}>
      //   <div id="header">
      //     <Header />
      //   </div>
      //   <div id="main" className="h-100 bg-danger container-fluid">
      //     <div className="row h-100">
      //       <div className="col-2 bg-info">
      //         <Nav />
      //       </div>
      //       <div className="col-10 bg-light">
      //         <Route exact path='/' component={Table}></Route>
      //         <Route path='/login' component={Login}></Route>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      
    );
  }
}

// App.PropTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   }).isRequired
// }

export default App;

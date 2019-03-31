import React, { Component } from 'react';
import {Route} from 'react-router-dom'



import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import LoginPage from './components/pages/loginPage';
import Dashboard from './components/pages/dashboard';



class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Dashboard}></Route>
        <Route exact path='/login' component={LoginPage}></Route>
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

export default App;

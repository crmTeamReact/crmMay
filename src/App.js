import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Table from './components/Table.js';

class App extends Component {
  render() {
    return (
      <div id="container" className="d-flex flex-column" style={{height: '100vh'}}>
        <div id="header">
          <Header />
        </div>
        <div id="main" className="h-100 bg-danger container-fluid">
          <div className="row h-100">
            <div className="col-2 bg-info">
              <Nav />
            </div>
            <div className="col-10 bg-light">
              <Table />
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Header extends Component {
  
  render() {
    
    return (
      <div className="container-fluid bg-light shadow-sm position-relative" style={{zIndex: '1000'}}>
        <div className="d-flex align-items-center py-1">
          
            <h2 className="mr-2">Marchelo</h2>
            <input className="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <NavLink className="nav-link text-secondary" to="/login">Sign out</NavLink>
              </li>
            </ul>
          </div>
      </div>
    // <div>
    // <nav class="navbar navbar-dark fixed-top bg-dark flex-nowrap p-0 shadow">
    // <a class="navbar-brand col-2 mr-1" href="#">marchelo dimare</a>
    // <input class="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
    // <ul class="navbar-nav px-3">
    //     <li class="nav-item text-nowrap">
    //     <a class="nav-link" href="#">Sign out</a>
    //     </li>
    // </ul>
    // </nav>
    // </div>
      
    )
  }
}

export default Header

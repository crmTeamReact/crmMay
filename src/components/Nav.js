import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
              <a href="#" className="nav-link">Link 1</a>
          </li>
          <li className="nav-item flex-column">
            <a href="#" id="btn-1" className="nav-link" data-toggle="collapse" data-target="#submenu1" aria-expanded="false">Link 2 (toggle)</a>
            <ul className="nav collapse" id="submenu1" role="menu" aria-labelledby="btn-1">
              <li className="nav-item w-100"><a href="#" className="nav-link">Link 2.1</a></li>
              <li className="nav-item w-100"><a href="#" className="nav-link">Link 2.2</a></li>
              <li className="nav-item w-100"><a href="#" className="nav-link">Link 2.3</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="#" className="nav-link">Link 3</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Link 4</a></li>
        </ul>
      </nav>  
    )
  }
}

export default Nav

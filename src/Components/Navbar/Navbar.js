import React from 'react'
import './Navbar.scss';
import img from '../../img/logo.jpg';


function Navbar() {
    return (
      <nav className="navbar">
          <img src={img} className="logo" alt="logo" height="60px" width="60px"/>
          <ul className="nav-links">
              <li>
                  <a href="/" className="nav-link">
                      home
                  </a>
              </li>
              <li>
                  <a href="/" className="nav-link">
                      about
                  </a>
              </li>
              <li>
                  <a href="/" className="nav-link active">
                      tours
                  </a>
              </li>
          </ul>
      </nav>
    )
}

export default Navbar

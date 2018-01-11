import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {

    // render and return back to the dom
    return (
      <header className="header-container row ml-0 mr-0">

          <div className="col-1">
              <img className="h-100 logo" src={require('../../Assets/img/medicine.svg')} alt="WhatPill Icon - inverted question mark ontop of pill pallet and container" />
          </div>

          <div className="col">
            <nav className="h-100">
              <ul className="font-weight-bold font-italic d-flex justify-content-center h-100">
                  <li className="d-flex align-items-center"><Link to="/">Home</Link></li>
                  <li className="d-flex align-items-center"><Link to="/my-drug-world">Drugs</Link></li>
                  <li className="d-flex align-items-center"><Link to="/forum">Forum</Link></li>
              </ul>
          </nav>
        </div>

      </header>
    );
  }
}

export default Header;

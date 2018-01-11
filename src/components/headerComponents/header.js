import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
          <div className="logo">
            <img src={require('../../Assets/img/medicine.svg')} width="20" height="200"  />
          </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;

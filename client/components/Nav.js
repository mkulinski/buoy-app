import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav className="nav">
    <ul>
      <li><Link to="/buoy-list">Buoys</Link></li>
      <li><Link to="/favorites">Favorites</Link></li>
    </ul>
  </nav>
);


export default Nav;

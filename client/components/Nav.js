import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div>
    <ul>
      <li><Link to="/buoy-list">Buoys</Link></li>
      <li><Link to="/favorites">Favorites</Link></li>
    </ul>
  </div>
);


export default Nav;

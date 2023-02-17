import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../images/planet.png';

const Navbar = () => (
  <nav>
    <div>
      <img src={icon} alt="logo" />
      <h3>Space Travelers Hub</h3>
    </div>
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/missions"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Missions
        </NavLink>
      </li>
      |
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;

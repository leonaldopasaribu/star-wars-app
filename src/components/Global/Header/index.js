import React from "react";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="container">
        <div className="header__logo">
          <p>Star Wars</p>
        </div>

        <div className="header__menu">
          <ul className="header__menu-list">
            <NavLink to="/">
              <li className="header__menu-list-item">Dashboard</li>
            </NavLink>
            <NavLink to="/films">
              <li className="header__menu-list-item">Films</li>
            </NavLink>
            <NavLink to="/peoples">
              <li className="header__menu-list-item">Peoples</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

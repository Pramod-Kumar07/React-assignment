import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../logo.png";
import "./header.css";
import {NavLink} from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleBar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logoimage" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/About'>About</NavLink>
            </li>
            <li>
              <NavLink to='/Projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/Videos'>Videos</NavLink>
            </li>
            <li>
              <NavLink to='/Contact'>Contact</NavLink>
            </li>
            <li className="active">
              <NavLink to='/Login'>Login</NavLink>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleBar}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      

      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
      <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/About'>About</NavLink>
            </li>
            <li>
              <NavLink to='/Projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/Videos'>Videos</NavLink>
            </li>
            <li>
              <NavLink to='/Contact'>Contact</NavLink>
            </li>
            <li className="active">
              <NavLink to='/Login'>Login</NavLink>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
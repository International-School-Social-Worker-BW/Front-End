import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header className='top-header'>
      <div className="container header-nav">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src="../../../assets/logo.png" alt="Educell Logo"/>
          </Link>
        </div>

        <nav>
          <ul className='main-menu'>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Join Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

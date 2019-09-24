import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdArrowDropDown } from 'react-icons/md'

export const ProtectedNavBar = () => {
  return (
    <header className='top-header protected-nav'>
      <div className="container header-nav protected-nav">
        <div className="logo">
          <Link to="/">Educell</Link>
        </div>

        <nav>
          <ul className='main-menu'>
            <li>
              <Link to="/">
                <MdHome className="home-icon"/>
              </Link>
            </li>
            <li className="user">
              <a href="" className="trigger">
                <span>Lydia Thompson</span>
                <span className="caret">
                  <MdArrowDropDown />
                </span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <Link to="/logout">Log Out</Link>
                </li>
              </ul>
              <Link to="/signup">
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

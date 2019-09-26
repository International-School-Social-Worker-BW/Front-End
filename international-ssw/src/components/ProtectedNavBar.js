import React from 'react';
import { Link } from 'react-router-dom';

import { MdHome, MdArrowDropDown, MdPerson } from 'react-icons/md'
import { fetchUser } from '../store/actions';
import { connect } from 'react-redux';


class ProtectedNavBar extends React.Component {

  render ()
  {return (
    <header className='top-header protected-nav'>
      <div className="container header-nav protected-nav">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src="../../../assets/logo.png" alt="Educell Logo"/>
          </Link>
        </div>

        <nav>
          <ul className='main-menu'>
            <li>
              <Link to="/protected">
                <MdHome className="home-icon"/>
              </Link>
            </li>
            <li className="user">
              <a href="" className="trigger">

                <span><MdPerson /></span>

                <span className="caret">
                  <MdArrowDropDown />
                </span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <Link to="/" onClick={() => localStorage.clear()}>Log Out</Link>
                </li>
              </ul>
              <Link to="/signup">
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )}
}

export default ProtectedNavBar;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  
`

export const NavBar = () => {
  return (
    <header className='container header-nav'>
      <div className="logo">
        <Link to="/">Educell</Link>
      </div>

      <nav>
        <ul className='main-menu'>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Join Us</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

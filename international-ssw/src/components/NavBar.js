import React from 'react';
import styled from 'styled-components';

import logo from '../images';

const StyledHeader = styled.header`
  
`

export const NavBar = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Educell logo" />
      </div>

      <nav>
        <ul>
          <li>About</li>
          <li>Sign In</li>
          <li>Join Us</li>
        </ul>
      </nav>

    </header>
  )
}

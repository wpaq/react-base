import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

const Header = function Header() {
  return (
    <Nav>
      <a href="none">
        <FaHome size={24} />
      </a>
      <a href="none">
        <FaUserAlt size={24} />
      </a>
      <a href="none">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  )
}

export default Header;

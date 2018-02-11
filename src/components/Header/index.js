import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { Link } from 'react-router-dom';
import { FaBars, FaClose } from 'react-icons/lib/fa';

import { ROOT, ABOUT, CONTACT, ILLUSTRATIONS, BLOG } from '../../routes';

import './header.css';

const Header = () => (
  <div className="header-container">
    <Link to={ROOT}>
      <img src="/images/logo2.png" alt="" className="logo" />
    </Link>
    <ResponsiveMenu
      menuOpenButton={<FaBars size={30} color="#ff3c77" />}
      menuCloseButton={<FaClose size={30} color="#ff3c77" />}
      changeMenuOn="900px"
      menu={
        <div className="navbar">
          <ul>
            <li>
              <Link to={ILLUSTRATIONS}>Illustrations</Link>
            </li>
            <li>
              <Link to={ABOUT}>About</Link>
            </li>
            <li>
              <Link to={BLOG}>Blog</Link>
            </li>
            <li>
              <Link to={CONTACT}>Contact</Link>
            </li>
          </ul>
        </div>
      }
    />
  </div>
);

export default Header;

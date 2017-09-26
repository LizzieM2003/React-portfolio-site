import React from 'react';
import Scroll, { Link } from 'react-scroll';

const Nav = () => (
  <nav className="nav">
    <div className="nav__brand">
      <a href="#home">Liz Mendes</a>
    </div>
    <ul className="nav__menu">
      <li className="nav__item">
        <Link to="about" smooth={true} duration={500}>About</Link>
      </li>
      <li className="nav__item">
        <a href="#portfolio">Portfolio</a>
      </li>
      <li className="nav__item">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Nav;

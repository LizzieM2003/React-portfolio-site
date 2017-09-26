import React from 'react';
import Scroll, { Link, Element } from 'react-scroll';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => (
  <div>
    <div className="nav-bar">
      <nav className="nav">
        <div className="nav__brand">
          <Link to="home" smooth={true} duration={500}>
            Liz Mendes
          </Link>
        </div>
        <div className="nav__menu">
          <li className="nav__item">
            <Link to="about" smooth={true} duration={500} offset={-50}>
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="portfolio" smooth={true} duration={500} offset={-50}>
              Portfolio
            </Link>
          </li>
          <li className="nav__item">
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              Contact
            </Link>
          </li>
        </div>
      </nav>
    </div>
    <Element name="home">
      <Home />
    </Element>
    <Element name="about">
      <About />
    </Element>
    <Element name="portfolio">
      <Portfolio />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
  </div>
);

export default App;

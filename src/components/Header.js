import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles/header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="top-links">
      <div className="email-link">
        <Icon name='envelope' />
          <a href="mailto:information@rockruth.com">information@rockruth.com</a>
        </div>
        <div className="phone-link">
        <Icon name='phone' />
          <a href="tel:+14703230732">(470) 323-0732</a>
        </div>

        {/* <div className="login-link">
          <i className="fas fa-user"></i>
          <a href="#">Login</a>
        </div>
        <div className="signup-link">
          <i className="fas fa-sign-in-alt"></i>
          <a href="#">Sign Up</a>
        </div> */}
      </div>

      <div className="main-nav">
        <Link to="/"><div className="logo">
        </div></Link>
        <div className="nav-list">
          <span className="menu-icon"><i className="fas fa-bars"></i></span>
          <ul>
            <li className="link-home">
              <Link to="/">HOME</Link>
            </li>
            <li className="link-shop">
              <Link to="/shop">SHOP NOW</Link>
            </li>
            <li>
              <Link to="equipment-for-sale">
                <span className="nobreak">HVAC EQUIPMENT </span>&nbsp;
                <span className="nobreak"> FOR SALE</span>
              </Link>
            </li>
            <li><Link to="financing">
              FINANCING AVAILABLE
            </Link></li>
                              <li><Link to="contact">
              CONTACT
             </Link></li>
          </ul>
        </div>
        <div className="quote-button">
          <Link to="quote">GET A QUOTE</Link>
        </div>
      </div>
    </div >
  )
}

export default Header;
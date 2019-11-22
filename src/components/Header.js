import React from 'react';
import { Link } from 'react-router-dom';

import './styles/header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="top-links">
        <div className="email-link">
          <i className="far fa-envelope"></i>
          <a href="mailto:info@rockruthhvac.com">info@rockruthhvac.com</a>
        </div>
        <div className="phone-link">
          <i className="fas fa-phone-alt"></i>
          <a href="tel:+14044814642">(404) 581-4642</a>
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
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
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
              CONTACT US
                              </Link></li>
            {/* <li><a href="#">MORE&nbsp;></a></li> */}
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
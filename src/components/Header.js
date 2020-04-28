import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles/header.css';

const Header = () => {
  return (
    <div className="Header short-header">
      <div className="top-links">
        <div className="email-link">
          <Icon name='envelope' />
          <a href="mailto:information@rockruth.com">information@rockruth.com</a>
        </div>
        <div className="phone-link">
          <Icon name='phone' />
          <a href="tel:+14705814642">(470) 581-4642</a>
        </div>

    
      </div>

      <div className="main-nav">
        <Link to="/"><div className="logo">
        </div></Link>
        <div className="nav-list">
          <span className="menu-icon"><i className="fas fa-bars"></i></span>
          <ul>
            <li className="link-home">
              <NavLink exact to="/" activeClassName="selected">HOME</NavLink>
            </li>
            <li className="link-shop">
              <NavLink to="/shop" activeClassName="selected">SHOP NOW</NavLink>
            </li>
            <li>
              <NavLink to="equipment-for-sale" activeClassName="selected">
                <span className="nobreak">HVAC EQUIPMENT </span>&nbsp;
                <span className="nobreak"> FOR SALE</span>
              </NavLink>
            </li>
            <li><NavLink to="financing" activeClassName="selected">
              FINANCING AVAILABLE
            </NavLink></li>
            <li><NavLink to="contact" activeClassName="selected">
              CONTACT
             </NavLink></li>
          </ul>
        </div>
        <div className="quote-button">
          <Link to="shop">GET A QUOTE</Link>
        </div>
      </div>PN
    </div >
  )
}

export default Header;

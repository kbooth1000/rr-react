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
      </div>
  
  
  
  
  <div style={{ position: 'absolute',
    right: '12px',
    top: '108px' }}>

                    <img style={{outline: 'none', margin: '0 auto', display: 'block'}} alt=""

                         src="https://www.payzer.com/images/jpp-button-medium.png"

                         usemap="#JPPMediumButtonMap" width="250" height="100" />

                    <p></p>

                    <map id="JPPMediumButtonMap" name="JPPMediumButtonMap">

                        <area style={{outline: 'none'}} title="Make a Payment" coords="104,53,194,65"

                              alt="buttonmap1"

                              shape="rect"

                              target="_blank"

                              href="https://www.payzer.com/Payment/ExternalMake/businessId/9599" />

                        <area style={{outline: 'none'}} title="Apply for Instant Financing"

                              alt="buttonmap1"

                              coords="104,74,243,86" shape="rect"

                              target="_blank"

                              href="https://www.payzer.com/Account/FinancingOptions/businessId/9599" />

                    </map>

                </div>
  
    </div >
  )
}

export default Header;

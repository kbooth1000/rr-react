import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles/footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-links" style={{
      }}>
        <div className="email-link">
        <Icon name='envelope' />
          <a href="mailto:information@rockruth.com">information@rockruth.com</a>
        </div>
        <div className="phone-link">
        <Icon name='phone' />
         <a href="tel:+14704814642">(470) 581-4642</a>
        </div>
        <div className="quote-button">
          <Link to="shop">SHOP NOW</Link>
        </div>
      </div>

      {/* <div className="main-nav">

        <div className="nav-list">
        
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
          <Link to="shop">SHOP NOW</Link>
        </div>
      </div> */}
    </div >
  )
}

export default Footer;
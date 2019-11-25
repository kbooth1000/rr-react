import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles/footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-links" style={{height: 'auto', position: 'relative'}} >
        <div className="email-link">
        <Icon name='envelope' />
          <a href="mailto:info@rockruthhvac.com">info@rockruthhvac.com</a>
        </div>
        <div className="phone-link">
        <Icon name='phone' />
          <a href="tel:+14043230732">(404) 323-0732</a>
        </div>

        <div className="copyright" style={{height: 'auto', position: 'absolute', left: '50%'}}>&copy; {new Date().getFullYear()} RockRuth Heating &amp; Air</div>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles/footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-links" style={{ height: 'auto', position: 'relative' }} >
        <div className="email-link">
          <Icon name='envelope' />
          <a href="mailto:information@rockruth.com">information@rockruth.com</a>
        </div>
        <div className="phone-link">
          <Icon name='phone' />
          <a href="tel:+14705814642">(470) 581-4642</a>
        </div>

        <div className="copyright">&copy; {new Date().getFullYear()} RockRuth Heating HVAC LLC &amp;<br />HVAC Online Pricing Matrix LLC</div>
        <div className="quote-button">
          <Link to="shop">SHOP NOW</Link>
        </div>
      </div>
    </div >
  )
}

export default Footer;

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
          <a href="mailto:information@rockruthhvac.com">information@rockruthhvac.com</a>
        </div>
        <div className="phone-link">
        <Icon name='phone' />
          <a href="tel:+14704814642">(470) 481-4642</a>
        </div>

        <div className="copyright" style={{height: 'auto', position: 'absolute', left: '50%'}}>&copy; {new Date().getFullYear()} RockRuth Heating &amp; Air</div>
        <div className="quote-button">
          <Link to="shop">SHOP NOW</Link>
        </div>
      </div>
    </div >
  )
}

export default Footer;

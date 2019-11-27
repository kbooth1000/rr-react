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
          <a href="tel:+17706932946">(770) 693-2946</a>
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
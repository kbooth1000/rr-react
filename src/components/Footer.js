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
          <span> <a href="tel:+19046442495">(904) 664-2495</a>&nbsp;&nbsp;</span>
          {/* <span style={{ whiteSpace: 'nowrap' }}> <Icon name='phone' />GA <a href="tel:+14705814642">(470) 581-4642</a></span> */}
        </div>

        <div className="copyright">&copy; {new Date().getFullYear()} RockRuth <br />Heating &amp; Air</div>
        <div className="quote-button">
          <Link to="shop">SHOP NOW</Link>
        </div>
      </div>
    </div >
  )
}

export default Footer;

import React from 'react';

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

        <div className="login-link">
          <i className="fas fa-user"></i>
          <a href="#">Login</a>
        </div>
        <div className="signup-link">
          <i className="fas fa-sign-in-alt"></i>
          <a href="#">Sign Up</a>
        </div>
      </div>

      <div className="main-nav">
        <a href="../index.html"><div className="logo">
        </div></a>
        <div className="nav-list">
          <span className="menu-icon"><i className="fas fa-bars"></i></span>
          <ul>
            <li><a href="../index.html" className="active">HOME</a></li>
            <li><a href="#">SHOP NOW</a></li>
            <li><a href="#">
              <span className="nobreak">HVAC EQUIPMENT</span>
              <span className="nobreak">FOR SALE
                                      </span></a></li>
            <li><a href="#">FINANCING AVAILABLE
                              </a></li>
            <li><a href="#">MORE&nbsp;></a></li>
          </ul>
        </div>
        <div className="quote-button">
          <a href="#">GET A QUOTE</a>
        </div>
      </div>
    </div>
  )
}

export default Header;
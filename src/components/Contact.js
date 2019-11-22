import React, { useCallback } from 'react';

import Map from './Map';

import './styles/shop.css';
import './styles/info-page.css';

const Contact = () => {
  const setScrollRef = useCallback(node => {
    if (node !== null) {
      node.parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [])

  return <div className="Contact" ref={setScrollRef}>

    <div className="info-page">
      <h1 className="title">CONTACT US</h1>
      <h2>Book Online Or Contact Us Today!</h2>
      <div className="deck">
        <p>We would love to hear from you to sign up & schedule your Preventative Maintenance Plan to Extend the Life of Your System or for one of the Specials Below.  Cost For A Maintenance Plan is $185 & This comes with a free Heat Tune Up (Value $65-$100 savings).  You Receive all services described on the Maintenance Plan Agreement Page.  Or you can simply schedule one of the specials below!
        </p>
      </div>
      <div className="info-blurb">

        <p><strong>RockRuth Heating &amp; Air</strong></p>
        <p>1400 South Marietta Parkway Suite 108, Marietta, Georgia 30067, United States</p>
        <p>Office: 770-693-2946</p>
        <p>After Hours: 404-323-0732</p>
      </div>
      <div className="info-blurb">
        <Map latitude={33.9392653} longitude={-84.5106983} zoom={12} height='500px' width='45vw' />
      </div>

    </div>
  </div>
}

export default Contact;
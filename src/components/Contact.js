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
      <h2>Contact Us Today!</h2>
      <div className="deck">
        <p><strong> 24 Hour Emergency Service Available</strong></p>
        <p>
          We strive to be in constant communication with our customers until the job is done. If you have questions or special requests, just drop us a line. To get a free quote, or for emergency service, please contact us at your convenience or book online for your heating & air needs. We look forward to serving you!</p>
        <br /><br />
      </div>
      <div className="info-blurb">


        <p><strong>RockRuth Heating &amp; Air</strong></p>
        <p>1400 South Marietta Parkway Suite 108, Marietta, Georgia 30067, United States</p>
        <p>Office: 770-693-2946</p>
        <p>After Hours: 404-323-0732</p>
      </div>
      <div className="info-blurb">

        <Map text="RockRuth Heating &amp; Air" latitude={33.9392653} longitude={-84.5106983} zoom={15} height='500px' width='45vw' />
      </div>

    </div>
  </div>
}

export default Contact;
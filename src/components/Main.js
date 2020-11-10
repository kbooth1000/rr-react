import React, { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import Header from './Header';
import HomePage from './HomePage';
import SystemRec from './SystemRec';
import Heating from './Heating';
import Cooling from './Cooling';
import ForSale from './ForSale';
import Financing from './Financing';
import Contact from './Contact';
import Map from './Map';
import RecommendedReplacements from './RecommendedReplacements';
import Shop from './Shop';
import Carousel from './Carousel';
import Footer from './Footer';
//import keys from '../keys/keys.js';

import './styles/main.css';

const Main = ({ match, ...props }) => {
  const [loc, setLoc] = useState('');
  //const trackingCode = keys.gaTrackingCode;  

  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize({ trackingId: 'UA-176574403-1' });
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  }, [location]);

  const handleChangeRoute = lcn => {
    setLoc(lcn);
    ReactGA.pageview(window.location.pathname, window.location.search);
    console.log('lcn: ', lcn, window.location.pathname, window.location.search)
  }

  return (
    <div className={`Main ${loc}`}>
      <Header />
      <div className="page-container">
        <Route exact path='/' render={props => <HomePage changeRoute={handleChangeRoute} {...props} />} />
        <Route path='/shop' render={props => <Shop {...props} changeRoute={handleChangeRoute} />} />
        <Route path='/heating' render={props => <Heating changeRoute={handleChangeRoute} {...props} />} />
        <Route path='/cooling' render={props => <Cooling changeRoute={handleChangeRoute} {...props} />} />
        <Route path='/replacement-parts' render={props => <RecommendedReplacements changeRoute={handleChangeRoute} {...props} />} />
        <Route path='/replacement-parts/:info' render={props => <RecommendedReplacements changeRoute={handleChangeRoute} {...props} />} />
        <Route exact path='/equipment-for-sale' render={props => <ForSale changeRoute={handleChangeRoute} {...props} />} />
        <Route exact path='/financing' render={props => <Financing {...props} changeRoute={handleChangeRoute} />} />
        <Route exact path='/quote' render={props => <SystemRec changeRoute={handleChangeRoute} {...props} />} />
        <Route exact path='/Contact' render={props => <Contact changeRoute={handleChangeRoute} {...props} />} />
        <Route exact path='/carousel' render={props => <Carousel changeRoute={handleChangeRoute} {...props} />} />
        <Route exact path='/map' render={props => <Map changeRoute={handleChangeRoute} {...props} />} />
      </div>
      <Footer />
    </div>
  )
}

export default Main;

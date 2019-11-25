import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import SystemRec from './SystemRec';
import Heating from './Heating';
import Cooling from './Cooling';
import ForSale from './ForSale';
import Financing from './Financing';
import Quote from './Quote';
import Contact from './Contact';
import Map from './Map';
import RecommendedReplacements from './RecommendedReplacements';
import Carousel from './Carousel';
import Footer from './Footer';

import './styles/main.css';

const Main = ({ match, ...rest }) => {
  const [loc, setLoc] = useState('');

  const handleChangeRoute = lcn => {
    setLoc(lcn);
    console.log('lcn: ', lcn)
  }

  return (
    <div className={`Main ${loc}`}>
      <Header />
      <div className="page-container">
        <Route exact path='/' render={() => <HomePage changeRoute={handleChangeRoute} {...rest} />} />
        <Route path='/shop' render={() => <SystemRec {...rest} changeRoute={handleChangeRoute} />} />
        <Route path='/heating' render={() => <Heating changeRoute={handleChangeRoute} {...rest} />} />
        <Route path='/cooling' render={() => <Cooling changeRoute={handleChangeRoute} {...rest} />} />
        <Route path='/replacement-parts' component={RecommendedReplacements} />
        <Route path='/replacement-parts/:info' component={RecommendedReplacements} />
        <Route exact path='/equipment-for-sale' render={() => <ForSale changeRoute={handleChangeRoute} {...rest} />} />
        <Route exact path='/financing' render={() => <Financing {...rest} changeRoute={handleChangeRoute} />} />
        <Route exact path='/quote' render={() => <Quote changeRoute={handleChangeRoute} {...rest} />} />
        <Route exact path='/Contact' render={() => <Contact changeRoute={handleChangeRoute} {...rest} />} />
        <Route exact path='/carousel' render={() => <Carousel changeRoute={handleChangeRoute} {...rest} />} />
        <Route exact path='/map' render={() => <Map changeRoute={handleChangeRoute} {...rest} />} />
      </div>
      <Footer />
    </div>
  )
}

export default Main;
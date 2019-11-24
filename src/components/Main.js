import React from 'react';
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

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={SystemRec} />
      <Route path='/heating' component={Heating} />
      <Route path='/cooling' component={Cooling} />
      <Route path='/replacement-parts' component={RecommendedReplacements} />
      <Route path='/replacement-parts/:info' component={RecommendedReplacements} />
      <Route exact path='/equipment-for-sale' component={ForSale} />
      <Route exact path='/financing' component={Financing} />
      <Route exact path='/quote' component={Quote} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/carousel' component={Carousel} />
      <Route exact path='/map' component={Map} />
    </div>
  )
}

export default Main;
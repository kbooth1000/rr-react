import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

import galleryImages from './data/galleryImages';
import './styles/homepage.css';

const HomePage = props => {


  const setScrollRef = useCallback(node => {
    if (node !== null) {
      node.parentNode.parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    }
  }, [])

  useEffect(
    ()=>props.changeRoute('home')
  )

  return (
    <div className="HomePage" ref={setScrollRef}>
      <div className="tile-navbar">
        <div className="nav-breaker">
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <Link to="/cooling" className="tile-mask">Cooling
                    </Link>
          </div>
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <Link to="/heating" className="tile-mask">Heating</Link>
          </div>
        </div>


        <div className="nav-breaker">
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <Link to="/shop" className="tile-mask">Shop now</Link>

          </div>
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <Link to="Financing" className="tile-mask">Financing
                    </Link>
          </div>
        </div>
      </div>

      <div className="slider-div">
        <Carousel images={galleryImages} />
      </div>
    </div>
  )
}

export default HomePage;
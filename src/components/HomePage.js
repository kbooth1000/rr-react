import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="tile-navbar">
        <div className="nav-breaker">
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <Link to="/pay-now" className="tile-mask">Pay now
                    </Link>
          </div>
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <Link to="/shop" className="tile-mask">Shop now</Link>
          </div>
        </div>


        <div className="nav-breaker">
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <Link to="Financing" className="tile-mask">Apply now
                    </Link>
          </div>
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <Link to="Financing" className="tile-mask">Financing
                    </Link>
          </div>
        </div>
      </div>
      <div className="slider-div">
        <div className="hero">
          <h3>Let us keep you COOL!</h3>
          <h2>RockRuth Heating &amp; Air in Atlanta</h2>
          <div className="deck">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptates sunt
                    commodi distinctio enim aspernatur. Earum, doloremque.</div>
          <div className="call-to-action">
            <a href="#">SHOP NOW! FINANCING AVAILABLE</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
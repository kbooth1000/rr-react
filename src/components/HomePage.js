import React from 'react';

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="tile-navbar">
        <div className="nav-breaker">
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <a href="#" className="tile-mask">Pay now
                    </a>
          </div>
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <a href="#" className="tile-mask">Shop now
                    </a>
          </div>
        </div>


        <div className="nav-breaker">
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <a href="#" className="tile-mask">Apply now
                    </a>
          </div>
          <div className="tile-nav">
            <div className="tile-bg"></div>
            <a href="#" className="tile-mask">Financing
                    </a>
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
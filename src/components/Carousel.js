import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

import './styles/carousel.css';

const Carousel = props => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {

    const carouselDelay = setInterval(() => {
      if (imgIndex >= props.images.length - 1) {
        console.log('>>>');

        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
        console.log('imgIndex', imgIndex);
      }
    }, 3500);
    return () => clearInterval(carouselDelay);
  }, [imgIndex, props.images.length])

  return (
    <div className="Carousel">
      <Gallery index={imgIndex} onRequestChange={i => setImgIndex(i)} style={{ width: '100%', height: '550px' }}>
        {props.images.map((img, i) => (
          <Link key={i} to={`${img.path}`}>

            <div className="hero">
              <h3>{img.heroTitle}</h3>
              <h2>
                <span className="nav-breaker">
                  RockRuth Heating &amp; Air </span>
                <span className="nav-breaker">in Florida and Atlanta</span>
              </h2>
              {/* <div className="deck">{img.heroDeck}</div> */}
              <div className="call-to-action">
                <span>{img.callToAction}</span>
              </div>
            </div>

            <GalleryImage src={img.src} objectFit="cover" style={{ width: '100vw', height: '550px' }} width="100%" height="100%" key={i} />
          </Link>
        )
        )}
      </Gallery>

    </div>
  )
}

export default Carousel;
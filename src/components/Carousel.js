import React, { useState, useEffect } from 'react';
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
  }, [imgIndex])

  return (
    <div className="Carousel">
      <Gallery index={imgIndex} onRequestChange={i => setImgIndex(i)} style={{ width: '100%', height: '550px' }}>
        {props.images.map((img, i) => (
          <GalleryImage src={img} objectFit="cover" style={{ width: '100vw', height: '550px' }} width="100%" height="100%" key={i} />
        )
        )}
      </Gallery>
    </div>
  )
}

export default Carousel;
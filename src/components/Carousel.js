import React, { useState, useEffect } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

import galleryImages from './data/galleryImages';
import './styles/carousel.css';

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="Carousel">
      <Gallery index={imgIndex} onRequestChange={setImgIndex} style={{ width: '100%', height: '550px' }}>
        {galleryImages.map((img, i) => (
          <GalleryImage src={img} objectFit="cover" style={{ width: '100vw', height: '550px' }} width="100%" height="100%" key={i} />
        )
        )}
      </Gallery>
    </div>
  )
}

export default Carousel;
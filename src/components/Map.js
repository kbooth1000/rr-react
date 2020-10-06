import React from 'react';
import GoogleMapReact from 'google-map-react';

import './styles/map.css';

const Marker = ({ text }) => <section>
  <div
    className="marker-text">{text}</div>
  <div className="marker-dot"></div>
  <div className="marker-link">GET DIRECTIONS</div>
</section>

const Map = props => {
  const makeOptions = () => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false
    }
  }

  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <GoogleMapReact
        options={makeOptions}
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={{ lat: props.latitude, lng: props.longitude }}
        defaultZoom={props.zoom}
      >
        <Marker
          lat={props.latitude}
          lng={props.longitude}
          text={props.text}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;

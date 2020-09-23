import React from 'react';
import GoogleMapReact from 'google-map-react';

import './styles/map.css';

const Marker = ({ text }) => <a className="map-marker" href="https://www.google.com/maps?daddr=1400+S+Marietta+Pkwy+SE+Suite+108,+Marietta,+Georgia+30067,+United+States" target="_blank" rel="noopener noreferrer">
  <div
    className="marker-text">{text}</div>
  <div className="marker-dot"></div>
  <div className="marker-link">GET DIRECTIONS</div>
</a>

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

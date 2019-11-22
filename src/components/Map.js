import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import keys from '../keys/keys.js';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  latitude = this.props.latitude;
  longitude = this.spendzoom = this.spendheight = this.spendwidth;
  zoom = this.zoom;
  height = this.height;
  width = this.width;
  longitude = this.spendzoom = this.spendheight = this.spendwidth;
  static defaultProps = {
    center: {
      lat: this.latitude,
      lng: this.longitude
    },
    zoom: this.zoom
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: this.height, width: this.width }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.mapKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.lat}
            lng={this.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
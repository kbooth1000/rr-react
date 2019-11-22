import React from 'react';
import { Icon } from 'semantic-ui-react';

const pinStyle = {
  borderRadius: '10px',
  transform: 'matrix(-1, 0, 0, 1, 10, 0)'
}
const FacilityPin = (props) => {
  return (
    <div>
      <Icon className="building icon"
        size='big'
        style={pinStyle}
        onClick={props.onClick}
      />
    </div>
  )
}
export default FacilityPin;
import React from 'react';

const iconStyle = {
  borderRadius: '100px',
  boxShadow: '3px 3px 1px #888888'
}

const CurrentPin = () => {
  return (
    <div className="CurrentPin">
      <Icon name="user circle outline"
        color='blue'
        size='big'
        style={iconStyle}
      />
      {text}
    </div>
  )
}

export default CurrentPin;
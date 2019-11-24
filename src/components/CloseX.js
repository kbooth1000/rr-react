import React from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './styles/shop.css';

const CloseX = (props) => {
  return (
    <div className="close-modal-x" style={{
      position: 'sticky',
      left: '95%',
      top: '1%'
    }}>
      <Icon size="big" name='window close' color="teal" />
    </div>
  )
}
export default CloseX;
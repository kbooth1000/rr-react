import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import keys from './keys/keys';
import ReactGA from 'react-ga';
import App from './App';


const initializeReactGA = () => {
  ReactGA.initialize(keys.REACT_APP_GA_TRACKING_CODE);
  // ReactGA.pageview('/homepage');
}

const rootElement = document.getElementById("root");
initializeReactGA();
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* global chrome */

chrome.tabs.getCurrent(tab => {
  if (typeof tab === 'undefined') {
    chrome.tabs.create({url:'./index.html'});
  } else {
    ReactDOM.render(<App />, document.getElementById('root'));
  }
});

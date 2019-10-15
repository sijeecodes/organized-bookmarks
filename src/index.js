import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './containers/App';
import './index.css';
/* global chrome */

const store = createStore(reducers);

chrome.tabs.getCurrent(tab => {
  if (typeof tab === 'undefined') {
    chrome.tabs.create({url:'./index.html#/1/default'});
  } else {
    ReactDOM.render(
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>,
      document.getElementById('root')
    );
  }
});

// ReactDOM.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

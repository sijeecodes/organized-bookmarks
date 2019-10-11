import React from 'react';
import './App.css';
/* global chrome */

function App() {
  console.log("The page's title is ");

  var logo = 'http://www.naver.com/favicon.ico';

  console.log(chrome);

  chrome.bookmarks.getTree((tree) => {
    console.log(tree);
  });
  chrome.bookmarks.getChildren('1', (result) => {
    console.log(result);
  });



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

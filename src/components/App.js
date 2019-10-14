import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavTab from './NavTab';
import MainDefault from './Main';
/* global chrome */

class App extends React.Component {
  // chrome.bookmarks.getTree((tree) => {
  //   console.log(tree);
  // });

  componentDidMount() {
    chrome.bookmarks.getChildren('0', result => {
      this.props.saveBookmarks(result);
    });
  }

  render() {
    return (
      <div className='App'>
        <Route path='/'>
          <NavTab />
        </Route>
        <Route path='/:id/default'>
          <MainDefault />
        </Route>
      </div>
    );
  }
}

export default App;

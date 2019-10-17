import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavTab from './NavTab';
import MainDefault from './MainDefault';
/* global chrome */

class App extends React.Component {
  componentDidMount() {
    console.log('starting after mount');
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);
      console.log('DATA LOADED');
    });
  }

  render() {
    return (
      <div className='App'>
        <Route
          path='/:id/:displayMode'
          render={routeProps => (
            <NavTab {...routeProps}
              state={this.props.state}
              setCurrentFolder={this.props.setCurrentFolder}
              unopenFolder={this.props.unopenFolder}
            />
          )}
        />
        <Route
          path='/:id/:displayMode'
          render={routeProps => (
            <MainDefault {...routeProps}
              state={this.props.state}
              setCurrentFolder={this.props.setCurrentFolder}
              setMainColumn={this.props.setMainColumn}
            />
          )}

        />
      </div>
    );
  }
}

export default App;

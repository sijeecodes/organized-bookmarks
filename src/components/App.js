import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavTab from './NavTab';
import MainDefault from './MainDefault';
import ConfigModal from './modals/ConfigModal';

/* global chrome */

class App extends React.Component {
  componentDidMount() {
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);
    });
  }

  render() {
    return (
      <div className='App'>
        <ConfigModal
          state={this.props.state}
          updateTree={this.props.updateTree}
          toggleConfigModal={this.props.toggleConfigModal}
        />
        <Route
          path='/:id/:displayMode'
          render={routeProps => (
            <NavTab {...routeProps}
              state={this.props.state}
              setCurrentFolder={this.props.setCurrentFolder}
              toggleConfigModal={this.props.toggleConfigModal}
              ref={el => {
                  console.log('el??', el);
                  this.elementPosition = el;
                  this.findPosition();
                }
              }
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
              toggleConfigModal={this.props.toggleConfigModal}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

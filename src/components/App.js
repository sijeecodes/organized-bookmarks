import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavTab from './NavTab';
import MainDefault from './Main';
/* global chrome */

class App extends React.Component {
  componentDidMount() {
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);
    });
    this.props.setCurrentFolder(this.props.state.currentFolder);
  }

  render() {
    return (
      <div className='App'>
        <Route path='/'>
          <NavTab
            state={this.props.state}
            setCurrentFolder={this.props.setCurrentFolder}
          />
        </Route>
        <Route path='/:id/default'>
          <MainDefault
            state={this.props.state}
            setCurrentFolder={this.props.setCurrentFolder}
          />
        </Route>
      </div>
    );
  }
}

export default App;

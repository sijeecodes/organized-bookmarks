import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavTab from './NavTab';
import MainDefault from './MainDefault';
import ConfigModal from './modals/ConfigModal';

/* global chrome */

class App extends React.Component {
  componentDidMount() {
    this.getTree();
  }

  getTree = () => {
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);
    });
  };

  updateTree = ({ isLink, id, title, url }) => {
    if(isLink){
      chrome.bookmarks.update(id, { title, url }, this.getTree);
    } else {
      chrome.bookmarks.update(id, { title }, this.getTree);
    }
  };

  removeById = (id) => {
    this.props.deleteFolder(id);
    chrome.bookmarks.remove(id, this.getTree);
  };

  render() {
    return (
      <div className='App'>
        <Route
          path='/:id/:displayMode'
          render={routeProps => (
            <ConfigModal {...routeProps}
              state={this.props.state}
              updateTree={this.updateTree}
              toggleConfigModal={this.props.toggleConfigModal}
              removeById={this.removeById}
              setCurrentFolder={this.props.setCurrentFolder}
            />
          )}
        />
        <Route
          path='/:id/:displayMode'
          render={routeProps => (
            <NavTab {...routeProps}
              state={this.props.state}
              setCurrentFolder={this.props.setCurrentFolder}
              toggleConfigModal={this.props.toggleConfigModal}
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
              setMainSortType={this.props.setMainSortType}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

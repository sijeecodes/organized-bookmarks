import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ConfigModal from './modals/ConfigModal';
import TopBar from './TopBar';
import MainBody from './MainBody';

/* global chrome */

class App extends React.Component {
  componentDidMount() {
    this.getTree();
  }

  getTree = () => {
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);
    });
    chrome.commands.onCommand.addListener(function(command) {
      console.log('Command:', command);
      if(command === 'shortcut1') {
        window.location = 'https://www.naver.com/';
      }
    });
    chrome.commands.getAll((result) =>  console.log('command result: ', result));
  };

  updateTree = ({ isLink, id, title, url }) => {
    if(isLink){
      chrome.bookmarks.update(id, {title, url}, this.getTree);
    } else {
      chrome.bookmarks.update(id, {title}, this.getTree);
    }
  };

  removeById = (id) => {
    this.props.deleteFolder(id);
    chrome.bookmarks.remove(id, this.getTree);
  };

  moveBookmark = (id, targetParentId, targetIndex) => {
    console.log('move bookmark!!!!', id, targetParentId, targetIndex);
    chrome.bookmarks.move(
      id,
      {
        parentId: targetParentId,
        index: targetIndex
      },
      this.getTree
    );
  }

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
              setTags={this.props.setTags}
            />
          )}
        />
        <TopBar
          state={this.props.state}
          setMainColumn={this.props.setMainColumn}
          setMainSortType={this.props.setMainSortType}
          setSearchWord={this.props.setSearchWord}
          setSearchType={this.props.setSearchType}
          setTagFilter={this.props.setTagFilter}
        />
        <MainBody
          state={this.props.state}
          setCurrentFolder={this.props.setCurrentFolder}
          setMainColumn={this.props.setMainColumn}
          toggleConfigModal={this.props.toggleConfigModal}
          setMainSortType={this.props.setMainSortType}
          setSearchWord={this.props.setSearchWord}
          setSearchType={this.props.setSearchType}
          setIsDragging={this.props.setIsDragging}
          moveBookmark={this.moveBookmark}
        />
      </div>
    );
  }
}

export default App;

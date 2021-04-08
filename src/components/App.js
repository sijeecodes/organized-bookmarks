import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Modal from './modals';
import TopBar from './TopBar';
import MainBody from './MainBody';
import Strings from './Strings';
import findInTree from '../utils/findInTree';

/* global chrome */
class App extends React.Component {
  componentDidMount() {
    this.atFirstLoad();
    document.addEventListener('keydown', this.goToShortcut);
    window.addEventListener('resize', this.setMainTabSize);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.goToShortcut);
    window.removeEventListener('resize', this.setMainTabSize);
  };

  atFirstLoad = () => {
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);
      this.setMainTabSize();
    });

    chrome.storage.sync.get(['orBData'], result => {
        if(result.orBData) {
          const parsed = JSON.parse(result['orBData']);
          this.props.loadSyncedState(parsed);
          window.location = `#/${this.props.state.currentFolder}/${this.props.state.searchType}`;
        }
      }
    );
  }

  setCurrentFolder = (data) => {
    this.props.setCurrentFolder(data);
    this.updateStorage('currentFolder', data[0]);
  };

  setMainSortType = (data) => {
    this.props.setMainSortType(data);
    this.updateStorage('mainSortType', data);
  };

  setMainColumn = (data) => {
    this.props.setMainColumn(data);
    this.updateStorage('mainColumn', data);
  };

  setMainTabSize = () => {
    this.props.setMainTabSize(
      document.documentElement.clientHeight - 32,
      Math.floor(document.documentElement.clientWidth * 0.75)
    );
  };

  setShortcuts = (data) => {
    this.props.setShortcuts(data);
    this.updateStorage('shortcuts', data);
  };

  setTags = (data) => {
    this.props.setTags(data);
    this.updateStorage('tags', data);
  };

  setTagFilter = (data) => {
    this.props.setTagFilter(data);
    this.updateStorage('tagFilter', data);
  };

  setTagNames = (data) => {
    this.props.setTagNames(data);
    this.updateStorage('tagNames', data);
  }

  getTree = () => {
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);
      this.updateStorage();
    });
  };

  goToShortcut = (key) => {
    if(this.props.state.searchFocused === 'off' && key.key > -1 && key.key < 10) {
      let targetID = this.props.state.shortcuts[key.key];
      let targetNode = findInTree(this.props.state.tree, targetID);

      if(targetNode) {
        if(targetNode.url) {
          window.location = targetNode.url;
        } else {
          this.setCurrentFolder(targetID);
          window.location = `#/${targetID}/${this.props.state.searchType}`
        }
      } else if(this.props.state.shortcuts[key.key] !== '') {
        let newShortcuts = this.props.state.shortcuts;
        newShortcuts[key.key] = '';
        this.props.setShortcuts(newShortcuts);
      }
    }
  };

  moveBookmark = (id, targetParentId, targetIndex) => {
    if(targetParentId) {
      chrome.bookmarks.move(
        id,
        {
          parentId: targetParentId,
          index: targetIndex
        },
        this.getTree
      );
    }
  };

  removeById = (id) => {
    this.props.deleteFolder(id);
    chrome.bookmarks.remove(id, this.getTree);
  };

  addFolder = (targetParentId) => {
    let bookmark = {
      parentId: targetParentId,
      title: Strings.addFolder.defaultName
    };
    chrome.bookmarks.create(bookmark, this.getTree);
  };

  updateStorage = (dataName, data) => {
    const orBData = {
      currentFolder: this.props.state.currentFolder,
      openFolders: this.props.state.openFolders,
      mainColumn: this.props.state.mainColumn,
      mainSortType: this.props.state.mainSortType,
      tags: this.props.state.tags,
      tagFilter: this.props.state.tagFilter,
      tagNames: this.props.state.tagNames,
      shortcuts: this.props.state.shortcuts,
    };
    if(dataName) {
      orBData[dataName] = data;
    }
    chrome.storage.sync.set({orBData: JSON.stringify(orBData)});
  };

  updateTree = ({ isUrl, id, title, url }) => {
    if(isUrl){
      chrome.bookmarks.update(id, {title, url}, this.getTree);
    } else {
      chrome.bookmarks.update(id, {title}, this.getTree);
    }
  };

  render() {
    return (
      <div className='App'>
        <Route
          path='/:id/:displayMode'
          render={routeProps => (
            <Modal {...routeProps}
              state={this.props.state}
              updateTree={this.updateTree}
              toggleConfigModal={this.props.toggleConfigModal}
              removeById={this.removeById}
              setCurrentFolder={this.setCurrentFolder}
              setTags={this.setTags}
              setTagNames={this.setTagNames}
              setShortcuts={this.setShortcuts}
            />
          )}
        />
        <TopBar
          state={this.props.state}
          setMainColumn={this.setMainColumn}
          setMainSortType={this.setMainSortType}
          setSearchWord={this.props.setSearchWord}
          setSearchType={this.props.setSearchType}
          setTagFilter={this.setTagFilter}
          addFolder={this.addFolder}
          toggleConfigModal={this.props.toggleConfigModal}
          openAllNavFolders={this.props.openAllNavFolders}
          closeAllNavFolders={this.props.closeAllNavFolders}
          setSearchFocused={this.props.setSearchFocused}
        />
        <MainBody
          state={this.props.state}
          setCurrentFolder={this.setCurrentFolder}
          setMainColumn={this.setMainColumn}
          toggleConfigModal={this.props.toggleConfigModal}
          setMainSortType={this.setMainSortType}
          setSearchWord={this.props.setSearchWord}
          setIsDragging={this.props.setIsDragging}
          moveBookmark={this.moveBookmark}
        />
      </div>
    );
  }
}

export default App;

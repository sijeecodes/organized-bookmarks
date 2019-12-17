import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ConfigModal from './modals/ConfigModal';
import TopBar from './TopBar';
import MainBody from './MainBody';

/* global chrome */

class App extends React.Component {
  componentDidMount() {
    this.atFirstLoad();
  }

  atFirstLoad = () => {
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);
    });

    chrome.storage.sync.get(['orBData'], result => {
        if(result.orBData) {
          const parsed = JSON.parse(result['orBData']);
          console.log('components/App - parsed data: ', parsed);
          this.props.loadSyncedState(parsed);
          window.location = `#/${this.props.state.currentFolder}/${this.props.state.searchType}`;
        }
      }
    );

    chrome.commands.onCommand.addListener(command => {
      switch(command) {
        case 'shortcut2':
          this.goToShortcut(this.props.state.shortcuts[2]);
          break;
        case 'shortcut3':
          this.goToShortcut(this.props.state.shortcuts[3]);
          break;
        default:
          this.goToShortcut(this.props.state.shortcuts[1]);
      }
    });
  }

  doSetCurrentFolder = (data) => {
    this.props.setCurrentFolder(data);
    this.updateStorage('currentFolder', data);
  };

  doSetMainSortType = (data) => {
    this.props.setMainSortType(data);
    this.updateStorage('mainSortType', data);
  };

  doSetMainColumn = (data) => {
    this.props.setMainColumn(data);
    this.updateStorage('mainColumn', data);
  };

  doSetTagFilter = (data) => {
    this.props.setTagFilter(data);
    this.updateStorage('tagFilter', data);
  };

  getTree = () => {
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);
      this.updateStorage();
    });
  };

  goToShortcut = (shortcut) => {
    if(shortcut) {
      let targetData = shortcut.split('/');

      if(targetData[0] === '#') {
        window.location = `#/${targetData[1]}/${this.props.state.searchType}`;
      } else {
        window.location = shortcut;
      }
    }
  };

  moveBookmark = (id, targetParentId, targetIndex) => {
    if(targetParentId)
    chrome.bookmarks.move(
      id,
      {
        parentId: targetParentId,
        index: targetIndex
      },
      this.getTree
    );
  };

  removeById = (id) => {
    this.props.deleteFolder(id);
    chrome.bookmarks.remove(id, this.getTree);
  };

  updateStorage = (dataName, data) => {
    const orBData = {
      currentFolder: this.props.state.currentFolder,
      openFolders: this.props.state.openFolders,
      mainColumn: this.props.state.mainColumn,
      mainSortType: this.props.state.mainSortType,
      tags: this.props.state.tags,
      tagFilter: this.props.state.tagFilter,
      shortcuts: this.props.state.shortcuts,
    };
    if(dataName) {
      orBData[dataName] = data;
    }

    chrome.storage.sync.set({orBData: JSON.stringify(orBData)}, () => {
      console.log('components/App - setting state data ', orBData, JSON.stringify(orBData));
    });
  };

  updateTree = ({ isLink, id, title, url }) => {
    if(isLink){
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
            <ConfigModal {...routeProps}
              state={this.props.state}
              updateTree={this.updateTree}
              toggleConfigModal={this.props.toggleConfigModal}
              removeById={this.removeById}
              setCurrentFolder={this.doSetCurrentFolder}
              setTags={this.props.setTags}
              setShortcuts={this.props.setShortcuts}
            />
          )}
        />
        <TopBar
          state={this.props.state}
          setMainColumn={this.doSetMainColumn}
          setMainSortType={this.doSetMainSortType}
          setSearchWord={this.props.setSearchWord}
          setSearchType={this.props.setSearchType}
          setTagFilter={this.doSetTagFilter}
          openAllNavFolders={this.props.openAllNavFolders}
          closeAllNavFolders={this.props.closeAllNavFolders}
        />
        <MainBody
          state={this.props.state}
          setCurrentFolder={this.doSetCurrentFolder}
          setMainColumn={this.doSetMainColumn}
          toggleConfigModal={this.props.toggleConfigModal}
          setMainSortType={this.doSetMainSortType}
          setSearchWord={this.props.setSearchWord}
          setIsDragging={this.props.setIsDragging}
          moveBookmark={this.moveBookmark}
        />
      </div>
    );
  }
}

export default App;

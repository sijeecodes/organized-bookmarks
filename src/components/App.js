import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ConfigModal from './modals/ConfigModal';
import TopBar from './TopBar';
import MainBody from './MainBody';

/* global chrome */

class App extends React.Component {
  componentDidMount() {
    this.firstGetTree();
  }

  firstGetTree = () => {
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
        case 'shortcut2': {
          if(this.props.state.shortcuts[2]) {
            let flag = this.props.state.shortcuts[2].split('/');

            if(flag[0] === '#') {
              window.location = `#/${flag[1]}/${this.props.state.searchType}`;
            } else {
              window.location = this.props.state.shortcuts[2];
            }
          }
          break;
        }
        case 'shortcut3': {
          if(this.props.state.shortcuts[3]) {
            let flag = this.props.state.shortcuts[3].split('/');

            if(flag[0] === '#') {
              window.location = `#/${flag[1]}/${this.props.state.searchType}`;
            } else {
              window.location = this.props.state.shortcuts[3];
            }
          }
          break;
        }
        default: {
          if(this.props.state.shortcuts[1]) {
            let flag = this.props.state.shortcuts[1].split('/');

            if(flag[0] === '#') {
              window.location = `#/${flag[1]}/${this.props.state.searchType}`;
            } else {
              window.location = this.props.state.shortcuts[1];
            }
          }
        }
      }
    });
  }

  getTree = () => {
    chrome.bookmarks.getTree(tree => {
      this.props.initiateState(tree);

      const orBData = {
        currentFolder: this.props.state.currentFolder,
        openFolders: this.props.state.openFolders,
        mainColumn: this.props.state.mainColumn,
        mainSortType: this.props.state.mainSortType,
        searchWord: this.props.state.searchWord,
        searchType: this.props.state.searchType,
        tags: this.props.state.tags,
        tagFilter: this.props.state.tagFilter,
        shortcuts: this.props.state.shortcuts,
      };

      chrome.storage.sync.set({orBData: JSON.stringify(orBData)}, () => {
        console.log('components/App - setting state data ', orBData, JSON.stringify(orBData));
      });
    });
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
    if(targetParentId)
    chrome.bookmarks.move(
      id,
      {
        parentId: targetParentId,
        index: targetIndex
      },
      this.getTree
    );
  }

  doSetCurrentFolder = (data) => {
    this.props.setCurrentFolder(data);
    // this.getTree(); need to update chrome.sync
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
              setCurrentFolder={this.doSetCurrentFolder}
              setTags={this.props.setTags}
              setShortcuts={this.props.setShortcuts}
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
          setCurrentFolder={this.doSetCurrentFolder}
          setMainColumn={this.props.setMainColumn}
          toggleConfigModal={this.props.toggleConfigModal}
          setMainSortType={this.props.setMainSortType}
          setSearchWord={this.props.setSearchWord}
          setIsDragging={this.props.setIsDragging}
          moveBookmark={this.moveBookmark}
        />
      </div>
    );
  }
}

export default App;

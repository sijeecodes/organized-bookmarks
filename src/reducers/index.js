/* global chrome */

const initialState = {
  currentFolder: '1',
  openFolders: ['0', '1'],
  mainDisplay: {},
  tree: {}
};

const newState = (originalState, name, newData) => {
  let tempState = {
    currentFolder: originalState.currentFolder,
    openFolders: originalState.openFolders,
    mainDisplay: originalState.mainDisplay,
    tree: originalState.tree
  }
  tempState[name] = newData;
  console.log('new state: ', tempState);
  return tempState;
};

const reducers = (state=initialState, action) => {
  if(action) {
    switch(action.type) {
      case 'INITIATE_STATE': {
        let targetData;
        let tempState = newState(state, 'tree', action.data);
        let tempOpenFolders = state.openFolders;

        const folderFinder = (subTree, targetFolderId) => {
          if(subTree.id === targetFolderId) {
            targetData = subTree;
          } else if(subTree.children && subTree.children.length > 0) {
            for(let i = 0; i < subTree.children.length; i++) {
              if(folderFinder(subTree.children[i], targetFolderId)) {
                break;
              }
            }
          }
          return targetData;
        }
        console.log('full tree: ', action.data);
        folderFinder(action.data[0], state.currentFolder);

        while(targetData.parentId) {
          if(tempOpenFolders.indexOf(targetData.id) === -1) {
            tempOpenFolders.push(targetData.id);
          }
          folderFinder(action.data[0], targetData.parentId);
        }

        return newState(tempState, 'openFolders', tempOpenFolders);
      }
      case 'SET_CURRENT_FOLDER': {
        let tempState = newState(state, 'currentFolder', action.data);
        chrome.bookmarks.getChildren(
          action.data,
          result => {
            return newState(tempState, 'mainDisplay', result);
          }
        );
        break;
      }
      default:
        return state;
    }
  }
};

export default reducers;

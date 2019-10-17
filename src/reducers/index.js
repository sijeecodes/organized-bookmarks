const initialState = {
  currentFolder: '1',
  openFolders: ['0', '1'],
  mainColumn: 2,
  tree: null
};

const newState = (originalState, name, newData) => {
  let tempState = {
    currentFolder: originalState.currentFolder,
    openFolders: originalState.openFolders,
    mainColumn: originalState.mainColumn,
    tree: originalState.tree
  }
  tempState[name] = newData;
  console.log('new state: ', tempState);
  return tempState;
};

const reducers = (state = initialState, action) => {
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
        let tempState = state;
        const newOpenFolders = state.openFolders;
        if(action.data === state.currentFolder) {
          if(state.openFolders.indexOf(action.data) !== -1) {
            newOpenFolders.splice(state.openFolders.indexOf(action.data), 1);
          } else {
            newOpenFolders.push(action.data);
          }
          tempState = newState(state, 'openFolders', newOpenFolders);
        } else {
          if(state.openFolders.indexOf(action.data) === -1) {
            newOpenFolders.push(action.data);
          }
          tempState = newState(state, 'openFolders', newOpenFolders);
        }
        return newState(tempState, 'currentFolder', action.data);
      }
      case 'UNOPEN_OPENFOLDERS': {
        const newData = state.openFolders.filter(folder => folder !== action.data);
        return newState(state, 'openFolders', newData);
      }
      case 'SET_MAINCOLUMN': {
        return newState(state, 'mainColumn', action.data);
      }
      default:
        return state;
    }
  }
};

export default reducers;

// const getChildren = (data) => {
//   return new Promise((resolve, reject) => {
//
//       action.data, (result) => {
//         resolve(result);
//       }
//     );
//   });
// }
//
// const setCurrentFolder = async data => {
//   const result = await getChildren(data);
//   let tempState = newState(state, 'currentFolder', action.data);
//   return newState(tempState, 'mainDisplay', result);
// }
//
// const totalresult = await setCurrentFolder(action.data);
// return totalresult;

// chrome.bookmarks.getChildren(
//   action.data,
//   result => {
//     let tempState = newState(state, 'currentFolder', action.data);
//     console.log('CURRENT FOLDER CHANGE');
//     return newState(tempState, 'mainDisplay', result);
//   }
// );

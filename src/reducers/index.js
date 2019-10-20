import findInTree from '../utils/findInTree';
import newState from '../utils/newState';

const initialState = {
  currentFolder: '1',
  openFolders: ['0', '1'],
  openModal: {
    nav: null,
    main: null
  },
  mainColumn: 2,
  tree: null
};

const reducers = (state = initialState, action) => {
  if(action) {
    switch(action.type) {
      case 'INITIATE_STATE': {
        let targetData;
        let tempState = newState(state, 'tree', action.data);
        let tempOpenFolders = state.openFolders;

        // const folderFinder = (subTree, targetFolderId) => {
        //   if(subTree.id === targetFolderId) {
        //     targetData = subTree;
        //   } else if(subTree.children && subTree.children.length > 0) {
        //     for(let i = 0; i < subTree.children.length; i++) {
        //       if(folderFinder(subTree.children[i], targetFolderId)) {
        //         break;
        //       }
        //     }
        //   }
        //   return targetData;
        // }
        // console.log('full tree: ', action.data);
        // folderFinder(action.data[0], state.currentFolder);

        targetData = findInTree(action.data, state.currentFolder);
        console.log('target data 1 ', targetData);

        while(targetData.parentId) {
          if(tempOpenFolders.indexOf(targetData.id) === -1) {
            tempOpenFolders.push(targetData.id);
          }
          // folderFinder(action.data[0], targetData.parentId);
          console.log('target data 2 ', targetData);
          targetData = findInTree(action.data, targetData.parentId);
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
      case 'SET_MAINCOLUMN': {
        return newState(state, 'mainColumn', action.data);
      }
      case 'TOGGLE_CONFIG_MODAL': {
        return newState(state, 'openModal', action.data);
      }
      default:
        return state;
    }
  }
};

export default reducers;

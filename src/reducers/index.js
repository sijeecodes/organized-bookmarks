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
        let tempState = newState(state, 'tree', action.data);
        let tempOpenFolders = state.openFolders;
        let targetData = findInTree(action.data, state.currentFolder);

        while(targetData.parentId) {
          if(tempOpenFolders.indexOf(targetData.id) === -1) {
            tempOpenFolders.push(targetData.id);
          }
          targetData = findInTree(action.data, targetData.parentId);
        }

        return newState(tempState, 'openFolders', tempOpenFolders);
      }
      case 'SET_CURRENTFOLDER': {
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
      case 'TOGGLE_CONFIGMODAL': {
        return newState(state, 'openModal', action.data);
      }
      case 'DELETE_FOLDER': {
        let temp = state.openFolders;
        temp.splice(temp.indexOf(action.data), 1);
        return newState(state, 'openFolders', temp);
      }
      default:
        return state;
    }
  }
};

export default reducers;

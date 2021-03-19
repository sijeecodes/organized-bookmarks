import findInTree from '../utils/findInTree';
import newState from '../utils/newState';
import Strings from '../components/Strings';

const initialState = {
  currentFolder: '1',
  openFolders: ['0', '1'],
  mainColumn: 2,
  mainTabSize: {
    height: 0,
    width: 0
  },
  mainSortType: 'userDefined',
  searchWord: '',
  searchType: 'default',
  tags: {},
  tagFilter: [],
  tagNames: {
    red: Strings.tags.red,
    orange: Strings.tags.orange,
    yellow: Strings.tags.yellow,
    green: Strings.tags.green,
    blue: Strings.tags.blue,
    purple: Strings.tags.purple,
    grey: Strings.tags.grey
  },
  shortcuts: {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  },
  isDragging: false,
  openModal: null,
  searchFocused: false,
  tree: null
};

const reducers = (state = initialState, action) => {
  if(action) {
    switch(action.type) {
      case 'UPDATE_SYNCED_STATE': {
        let tempState = {};

        Object.keys(state).forEach(el =>{
          if(typeof action.data[el] !== 'undefined' && action.data[el] !== null) {
            tempState[el] = action.data[el];
          } else {
            tempState[el] = state[el];
          }
        });
        return tempState;
      }
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
      case 'SET_SEARCH_FOCUS': {
        return newState(state, 'searchFocused', action.data);
      }
      case 'SET_CURRENT_FOLDER': {
        const newOpenFolders = state.openFolders;
        let newCurrentFolder = action.data[0];

        if(action.data.length > 1) {
          const openParentFolders = (parentId) => {
            if(newOpenFolders.indexOf(parentId) === -1) {
              newOpenFolders.push(parentId);
              let parentNode = findInTree(state.tree, parentId);
              
              if(parentNode !== 'inexest' && parentNode.parentId) {
                openParentFolders(parentNode.parentId);
              }
            }
          }
          openParentFolders(action.data[1]);
        }

        if(newCurrentFolder === state.currentFolder) {
          if(newOpenFolders.indexOf(newCurrentFolder) !== -1) {
            newOpenFolders.splice(newOpenFolders.indexOf(newCurrentFolder), 1);
          } else {
            newOpenFolders.push(newCurrentFolder);
          }
        } else {
          if(newOpenFolders.indexOf(newCurrentFolder) === -1) {
            newOpenFolders.push(newCurrentFolder);
          }
        }
        let tempState = newState(state, 'openFolders', newOpenFolders);

        return newState(tempState, 'currentFolder', newCurrentFolder);
      }
      case 'SET_MAIN_COLUMN': {
        return newState(state, 'mainColumn', action.data);
      }
      case 'TOGGLE_CONFIG_MODAL': {
          let modalState = null;

          if(action.data !== 'close') {
            modalState = action.data.split('-');
          }

          return newState(state, 'openModal', modalState);
      }
      case 'DELETE_FOLDER': {
        let tempState = state;
        let newShortcuts = state.shortcuts;
        let newTags = state.tags;
        let temp = state.openFolders;
        let shortcutIndex = Object.values(newShortcuts).indexOf(action.data);

        if(shortcutIndex !== -1) {
          newShortcuts[shortcutIndex] = '';
          tempState = newState(state, 'shortcuts', newShortcuts);
        }
        delete newTags[action.data];
        tempState = newState(tempState, 'tags', newTags);
        temp.splice(temp.indexOf(action.data), 1);

        return newState(tempState, 'openFolders', temp);
      }
      case 'SET_IS_DRAGGING': {
        return newState(state, 'isDragging', action.data);
      }
      case 'SET_MAIN_SORT_TYPE': {
        return newState(state, 'mainSortType', action.data);
      }
      case 'SET_SEARCH_WORD': {
        return newState(state, 'searchWord', action.data);
      }
      case 'SET_SEARCH_TYPE': {
        return newState(state, 'searchType', action.data);
      }
      case 'SET_TAGS': {
        return newState(state, 'tags', action.data);
      }
      case 'SET_TAG_FILTER': {
        return newState(state, 'tagFilter', action.data);
      }
      case 'SET_TAG_NAMES': {
        return newState(state, 'tagNames', action.data);
      }
      case 'SET_SHORTCUTS': {
        return newState(state, 'shortcuts', action.data);
      }
      case 'SET_MAINTAB_SIZE': {
        return newState(state, 'mainTabSize', action.data);
      }
      case 'OPEN_ALL_NAV_FOLDERS': {
        let tempOpenFolders = [];
        const searchFolders = (tree) => {
          for(let i = 0; i < tree.length; i++) {
            if(tree[i].children) {
              if(tree[i].children.length > 0 && tree[i].children.find(el => el.children)) {
                tempOpenFolders.push(tree[i].id);
              }
              searchFolders(tree[i].children);
            }
          }
        }
        searchFolders(state.tree);

        return newState(state, 'openFolders', tempOpenFolders);
      }
      case 'CLOSE_ALL_NAV_FOLDERS': {
        return newState(state, 'openFolders', ["0"]);
      }
      default:
        return state;
    }
  }
};

export default reducers;

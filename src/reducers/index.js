import findInTree from '../utils/findInTree';
import newState from '../utils/newState';

const initialState = {
  currentFolder: '1',
  openFolders: ['0', '1'],
  mainColumn: 2,
  mainSortType: 'userDefined',
  searchWord: '',
  searchType: 'default',
  tags: {},
  tagFilter: [],
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
  searchFocused: 'off',
  tree: null
};

const reducers = (state = initialState, action) => {
  if(action) {
    switch(action.type) {
      case 'UPDATE_SYNCED_STATE': {
        return {
          currentFolder: action.data.currentFolder,
          openFolders: action.data.openFolders,
          mainColumn: action.data.mainColumn,
          mainSortType: action.data.mainSortType,
          searchWord: state.searchWord,
          searchType: state.searchType,
          tags: action.data.tags,
          tagFilter: action.data.tagFilter,
          shortcuts: action.data.shortcuts,
          isDragging: state.isDragging,
          openModal: state.openModal,
          searchFocused: state.searchFocused,
          tree: state.tree
        };
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
        if(action.data === state.currentFolder && state.openFolders.indexOf(action.data) !== -1) {
          newOpenFolders.splice(state.openFolders.indexOf(action.data), 1);
        } else if(state.openFolders.indexOf(action.data) === -1) {
          newOpenFolders.push(action.data);
        }
        let tempState = newState(state, 'openFolders', newOpenFolders);
        return newState(tempState, 'currentFolder', action.data);
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
        let shortcutIndex = Object.values(newShortcuts).indexOf(action.data);
        if(shortcutIndex !== -1) {
          newShortcuts[shortcutIndex] = '';
          tempState = newState(state, 'shortcuts', newShortcuts);
        }

        let newTags = state.tags;
        delete newTags[action.data];
        tempState = newState(tempState, 'tags', newTags);

        let temp = state.openFolders;
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
        let tempTags = state.tags;
        if(action.data.tags.lenght === 0) {
          delete tempTags[action.data.id];
        } else {
          tempTags[action.data.id] = action.data.tags.sort();
        }
        return newState(state, 'tags', tempTags);
      }
      case 'SET_TAG_FILTER': {
        return newState(state, 'tagFilter', action.data);
      }
      case 'SET_SHORTCUTS': {
        return newState(state, 'shortcuts', action.data);
      }
      case 'OPEN_ALL_NAV_FOLDERS': {
        let tempOpenFolders = [];
        const searchFolders = (tree) => {
          for(let i = 0; i < tree.length; i++) {
            if(tree[i].children) {
              tempOpenFolders.push(tree[i].id);
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

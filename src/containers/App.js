import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSyncedState(data) {
      dispatch({
        type: 'UPDATE_SYNCED_STATE',
        data
      });
    },
    initiateState(tree) {
      dispatch({
        type: 'INITIATE_STATE',
        data: tree
      });
    },
    setSearchFocused(data) {
      dispatch({
        type: 'SET_SEARCH_FOCUS',
        data
      })
    },
    setCurrentFolder(data) {
      dispatch({
        type: 'SET_CURRENT_FOLDER',
        data
      });
    },
    setMainColumn(num) {
      dispatch({
        type: 'SET_MAIN_COLUMN',
        data: num
      });
    },
    toggleConfigModal(data) {
      dispatch({
        type: 'TOGGLE_CONFIG_MODAL',
        data
      });
    },
    deleteFolder(data) {
      dispatch({
        type: 'DELETE_FOLDER',
        data
      });
    },
    setMainSortType(data) {
      dispatch({
        type: 'SET_MAIN_SORT_TYPE',
        data
      });
    },
    setSearchWord(data) {
      dispatch({
        type: 'SET_SEARCH_WORD',
        data
      });
    },
    setSearchType(data) {
      dispatch({
        type: 'SET_SEARCH_TYPE',
        data
      });
    },
    setIsDragging(data) {
      dispatch({
        type: 'SET_IS_DRAGGING',
        data
      });
    },
    setTags(data) {
      dispatch({
        type: 'SET_TAGS',
        data
      });
    },
    setTagNames(data) {
      dispatch({
        type: 'SET_TAG_NAMES',
        data
      });
    },
    setTagFilter(data) {
      dispatch({
        type: 'SET_TAG_FILTER',
        data
      });
    },
    setShortcuts(data) {
      dispatch({
        type: 'SET_SHORTCUTS',
        data
      });
    },
    openAllNavFolders() {
      dispatch({
        type: 'OPEN_ALL_NAV_FOLDERS'
      });
    },
    closeAllNavFolders() {
      dispatch({
        type: 'CLOSE_ALL_NAV_FOLDERS'
      })
    },
    setMainTabSize(height, width) {
      dispatch({
        type: 'SET_MAINTAB_SIZE',
        data: {
          height,
          width
        }
      });
    }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(/* component */ App);

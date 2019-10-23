import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    initiateState(tree) {
      dispatch({
        type: 'INITIATE_STATE',
        data: tree
      });
    },
    setCurrentFolder(folderId) {
      dispatch({
        type: 'SET_CURRENT_FOLDER',
        data: folderId
      });
    },
    setMainColumn(num) {
      dispatch({
        type: 'SET_MAIN_COLUMN',
        data: num
      });
    },
    toggleConfigModal(data) {
      console.log('event', data);
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
    }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(/* component */ App);

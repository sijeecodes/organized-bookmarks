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
        type: 'SET_CURRENTFOLDER',
        data: folderId
      });
    },
    setMainColumn(num) {
      dispatch({
        type: 'SET_MAINCOLUMN',
        data: num
      });
    },
    toggleConfigModal(data) {
      console.log('event', data);
      dispatch({
        type: 'TOGGLE_CONFIGMODAL',
        data
      });
    },
    deleteFolder(data) {
      dispatch({
        type: 'DELETE_FOLDER',
        data
      });
    }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(/* component */ App);

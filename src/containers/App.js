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
    unopenFolder(folderId) {
      dispatch({
        type: 'UNOPEN_OPENFOLDERS',
        data: folderId
      });
    },
    setMainColumn(num) {
      dispatch({
        type: 'SET_MAINCOLUMN',
        data: num
      })
    }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(/* component */ App);

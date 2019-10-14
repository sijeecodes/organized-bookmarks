import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return { data: state };
};

const mapDispatchToProps = dispatch => {
  return {
    saveBookmarks(data) {
      console.log('input data', data);
      dispatch({
        type: 'SAVE_BOOKMARKS',
        data
      });
    },
    deleteBooks(){
      console.log('del');
    }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(/* component */ App);

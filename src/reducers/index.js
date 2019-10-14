const initialState = {
  state: 'empty'
};

const reducers = (state=initialState, action) => {
  if(action) {
    switch(action.type) {
      case 'SAVE_BOOKMARKS':
        const newState = action.data;
        console.log(newState);
        return newState;
      default:
        return state;
    }
  }
};

export default reducers;

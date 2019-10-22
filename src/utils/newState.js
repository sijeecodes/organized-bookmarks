const newState = (originalState, name, newData) => {
  if(name === 'openModal') {
    console.log('recieved ', newData);
    const result = {
      'nav': null,
      'main': null
    }
    if(newData === 'close') {
      newData = result;
    } else {
      const [type, id] = newData.split('-');
      result[type] = id;
      newData = result;
    }
  }

  let tempState = {
    currentFolder: originalState.currentFolder,
    openFolders: originalState.openFolders,
    openModal: originalState.openModal,
    mainColumn: originalState.mainColumn,
    mainSortType: originalState.mainSortType,
    searchWord: originalState.searchWord,
    searchType: originalState.searchType,
    tree: originalState.tree
  }
  tempState[name] = newData;
  console.log('new state: ', tempState);
  return tempState;
};

export default newState;

const newState = (originalState, name, newData) => {
  let tempState = {
    currentFolder: originalState.currentFolder,
    openFolders: originalState.openFolders,
    openModal: originalState.openModal,
    mainColumn: originalState.mainColumn,
    mainSortType: originalState.mainSortType,
    searchWord: originalState.searchWord,
    searchType: originalState.searchType,
    isDragging: originalState.isDragging,
    tags: originalState.tags,
    tagFilter: originalState.tagFilter,
    tree: originalState.tree
  }
  tempState[name] = newData;
  console.log('new state: ', tempState);
  return tempState;
};

export default newState;

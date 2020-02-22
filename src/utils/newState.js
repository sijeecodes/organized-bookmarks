const newState = (originalState, name, newData) => {
  let tempState = {
    currentFolder: originalState.currentFolder,
    openFolders: originalState.openFolders,
    mainColumn: originalState.mainColumn,
    mainSortType: originalState.mainSortType,
    searchWord: originalState.searchWord,
    searchType: originalState.searchType,
    tags: originalState.tags,
    tagFilter: originalState.tagFilter,
    shortcuts: originalState.shortcuts,
    searchFocused: originalState.searchFocused,
    tree: originalState.tree,
    isDragging: originalState.isDragging,
    openModal: originalState.openModal
  }
  tempState[name] = newData;
  console.log('utils/newState - new state: ', name, tempState);
  return tempState;
};

export default newState;

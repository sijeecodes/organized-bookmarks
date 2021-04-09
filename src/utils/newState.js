const newState = (originalState, name, newData) => {
  let tempState = {
    currentFolder: originalState.currentFolder,
    openFolders: originalState.openFolders,
    mainColumn: originalState.mainColumn,
    mainSortType: originalState.mainSortType,
    mainTabSize: originalState.mainTabSize,
    searchWord: originalState.searchWord,
    searchType: originalState.searchType,
    tags: originalState.tags,
    tagFilter: originalState.tagFilter,
    tagNames: originalState.tagNames,
    shortcuts: originalState.shortcuts,
    searchFocused: originalState.searchFocused,
    tree: originalState.tree,
    isDragging: originalState.isDragging,
    openModal: originalState.openModal
  }
  tempState[name] = newData;

  return tempState;
};

export default newState;

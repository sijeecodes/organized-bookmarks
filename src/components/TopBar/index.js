import React from 'react';
import NavMenu from './NavMenu';
import MainMenu from './MainMenu';

const TopBar = ({
  state,
  setMainColumn,
  setMainSortType,
  setSearchWord,
  setSearchType,
  setTagFilter,
  addFolder,
  toggleConfigModal,
  openAllNavFolders,
  closeAllNavFolders,
  setSearchFocused,
}) => {
  return (
    <div className='top-bar'>
      <NavMenu
        toggleConfigModal={toggleConfigModal}
        openAllNavFolders={openAllNavFolders}
        closeAllNavFolders={closeAllNavFolders}
      />
      <MainMenu
        addFolder={addFolder}
        state={state}
        setMainColumn={setMainColumn}
        setMainSortType={setMainSortType}
        setSearchWord={setSearchWord}
        setSearchType={setSearchType}
        setTagFilter={setTagFilter}
        setSearchFocused={setSearchFocused}
        toggleConfigModal={toggleConfigModal}
      />
    </div>
  );
};

export default TopBar;

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
  openAllNavFolders,
  closeAllNavFolders
}) => {
  return (
    <div className='top-bar'>
      <NavMenu
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
      />
    </div>
  );
};

export default TopBar;

import React from 'react';
import NavMenu from './NavMenu';
import MainMenu from './MainMenu';

const TopBar = ({
  state,
  setMainColumn,
  setMainSortType,
  setSearchWord,
  setSearchType,
  setTagFilter
}) => {
  return (
    <div className='top-bar'>
      <NavMenu />
      <MainMenu
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

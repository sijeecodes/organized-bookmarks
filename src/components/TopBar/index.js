import React from 'react';
import NavMenu from './NavMenu';
import MainMenu from './MainMenu';

const TopBar = ({
  state,
  setMainColumn,
  setMainSortType,
  setSearchWord,
  setSearchType
}) => {
  return (
    <div>
      <NavMenu />
      <MainMenu
        state={state}
        setMainColumn={setMainColumn}
        setMainSortType={setMainSortType}
        setSearchWord={setSearchWord}
        setSearchType={setSearchType}
      />
    </div>
  );
};

export default TopBar;

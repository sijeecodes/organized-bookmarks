import React from 'react';
import ColumnAdjust from './ColumnAdjust';
import SortBy from './SortBy';
import Tags from './Tags';
import Search from './Search';

const MainMenu = ({
  state,
  setMainColumn,
  setMainSortType,
  setSearchWord,
  setSearchType,
  setTagFilter
}) => {
  return (
    <div className='main-menu'>
      <ColumnAdjust
        mainColumn={state.mainColumn}
        setMainColumn={setMainColumn}
      />
      <SortBy
        mainSortType={state.mainSortType}
        setMainSortType={setMainSortType}
      />
      <Tags
        tagFilter={state.tagFilter}
        setTagFilter={setTagFilter}
      />
      <Search
        searchWord={state.searchWord}
        setSearchWord={setSearchWord}
        searchType={state.searchType}
        setSearchType={setSearchType}
      />
    </div>
  );
};

export default MainMenu;

import React from 'react';
import AddFolder from './AddFolder';
import ColumnAdjust from './ColumnAdjust';
import SortBy from './SortBy';
import Tags from './Tags';
import DeepSearch from './DeepSearch';
import Search from './Search';

const MainMenu = ({
  addFolder,
  state,
  setMainColumn,
  setMainSortType,
  setSearchWord,
  setSearchType,
  setTagFilter
}) => {
  return (
    <div className='main-menu'>
      <AddFolder
        addFolder={addFolder}
        state={state}
      />
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
      <DeepSearch
        searchType={state.searchType}
        setSearchType={setSearchType}
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

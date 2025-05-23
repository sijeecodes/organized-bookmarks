import React from 'react';
import AddFolder from './AddFolder';
import ColumnAdjust from './ColumnAdjust';
import SortBy from './SortBy';
import Tags from './Tags';
import DeepSearch from './DeepSearch';
import Search from './Search';
import Icons from '../Icons';
import Strings from '../Strings';

const MainMenu = ({
  addFolder,
  state,
  setMainColumn,
  setMainSortType,
  setSearchWord,
  setSearchType,
  setTagFilter,
  setSearchFocused,
  toggleConfigModal
}) => {
  return (
    <div className='main-menu'>
      <div
        className='shortcutList-container'
        onClick={e => {
          e.preventDefault();
          toggleConfigModal('settings');
        }}
      >
        <div className='shortcutList-icon'>
          <i
            className={Icons.shortcutListModal.shortcut}
          />
        </div>
        <div
          className='shortcutList-tooltip'
        >
          {Strings.shortcutListModal.tooltip}
        </div>
      </div>
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
        tagNames={state.tagNames}
        setTagFilter={setTagFilter}
        toggleConfigModal={toggleConfigModal}
      />
      <DeepSearch
        searchType={state.searchType}
        setSearchType={setSearchType}
      />
      <Search
        searchFocused={state.searchFocused}
        searchWord={state.searchWord}
        setSearchWord={setSearchWord}
        setSearchFocused={setSearchFocused}
        setSearchType={setSearchType}
      />
    </div>
  );
};

export default MainMenu;

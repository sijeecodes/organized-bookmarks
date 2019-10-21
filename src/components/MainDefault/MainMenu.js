import React from 'react';
import ColumnAdjust from './ColumnAdjust';
import Zoom from '../common/Zoom';
import SortBy from './SortBy';
import Tabs from './Tabs';
import Search from './Search';

const MainMenu = ({ state, setMainColumn, setMainSortType }) => {
  return (
    <div className='main-menu'>
      <Zoom
      />
      <ColumnAdjust
        mainColumn={state.mainColumn}
        setMainColumn={setMainColumn}
      />
      <SortBy
        mainSortType={state.mainSortType}
        setMainSortType={setMainSortType}
      />
      <Tabs
      />
      <Search
        
      />
    </div>
  );
};

export default MainMenu;

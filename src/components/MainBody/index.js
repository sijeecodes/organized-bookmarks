import React from 'react';
import { Route } from 'react-router-dom';
import NavTab from './NavTab';
import MainTab from './MainTab';

const MainBody = ({
  state,
  setCurrentFolder,
  setMainColumn,
  toggleConfigModal,
  setMainSortType,
  setSearchWord,
  setSearchType,
  setIsDragging,
  moveBookmark
}) => {
  return (
    <div className='main-body'>
      <Route
        path='/:id/:displayMode'
        render={routeProps => (
          <NavTab {...routeProps}
            state={state}
            setCurrentFolder={setCurrentFolder}
            toggleConfigModal={toggleConfigModal}
            setIsDragging={setIsDragging}
            moveBookmark={moveBookmark}
          />
        )}
      />
      <Route
        path='/:id/:displayMode'
        render={routeProps => (
          <MainTab {...routeProps}
            state={state}
            setCurrentFolder={setCurrentFolder}
            setMainColumn={setMainColumn}
            toggleConfigModal={toggleConfigModal}
            setMainSortType={setMainSortType}
            setSearchWord={setSearchWord}
            setSearchType={setSearchType}
            setIsDragging={setIsDragging}
            moveBookmark={moveBookmark}
          />
        )}
      />
    </div>
  );
};

export default MainBody;

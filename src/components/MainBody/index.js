import React from 'react';
import { Route } from 'react-router-dom';
import NavTab from './NavTab';
import MainDefault from './MainDefault';

const MainBody = ({
  state,
  setCurrentFolder,
  setMainColumn,
  toggleConfigModal,
  setMainSortType,
  setSearchWord,
  setSearchType
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
          />
        )}
      />
      <Route
        path='/:id/:displayMode'
        render={routeProps => (
          <MainDefault {...routeProps}
            state={state}
            setCurrentFolder={setCurrentFolder}
            setMainColumn={setMainColumn}
            toggleConfigModal={toggleConfigModal}
            setMainSortType={setMainSortType}
            setSearchWord={setSearchWord}
            setSearchType={setSearchType}
          />
        )}
      />
    </div>
  );
};

export default MainBody;

import React from 'react';
import Column from './Column';
import Zoom from './Zoom';

const MainMenu = ({ state, setMainColumn }) => {
  console.log('main menu is ', state, setMainColumn);

  return (
    <div className='main-menu'>
      <Zoom
      />
      <Column
        mainColumn={state.mainColumn}
        setMainColumn={setMainColumn}
      />
    </div>
  );
};

export default MainMenu;

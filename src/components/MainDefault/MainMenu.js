import React from 'react';
import ColumnAdjust from './ColumnAdjust';
import Zoom from '../common/Zoom';

const MainMenu = ({ state, setMainColumn }) => {
  return (
    <div className='main-menu'>
      <Zoom
      />
      <ColumnAdjust
        mainColumn={state.mainColumn}
        setMainColumn={setMainColumn}
      />
    </div>
  );
};

export default MainMenu;

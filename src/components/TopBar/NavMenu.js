import React from 'react';
import Icons from '../Icons';
import Strings from '../Strings';

const NavMenu = ({ openAllNavFolders, closeAllNavFolders }) => {


  return (
    <div className='nav-menu'>
      {Strings.navMenu.title}
      <div
        className='nav-menu-open-folders'
        onClick={openAllNavFolders}
      >
        <div>
          <i
            className={Icons.navMenu.openFolders}
            onClick={openAllNavFolders}
          />
        </div>
        <div className='nav-menu-tooltip'>
          {Strings.navMenu.openFolders}
        </div>
      </div>
      <div
        className='nav-menu-close-folders'
        onClick={closeAllNavFolders}
      >
        <div>
          <i
            className={Icons.navMenu.closeFolders}
            onClick={openAllNavFolders}
          />
        </div>
        <div className='nav-menu-tooltip'>
          {Strings.navMenu.closeFolders}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;

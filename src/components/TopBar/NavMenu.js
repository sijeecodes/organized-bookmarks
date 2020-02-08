import React from 'react';
import Icons from '../Icons';
import Strings from '../Strings';

const NavMenu = ({ openAllNavFolders, closeAllNavFolders }) => {
  return (
    <div className='nav-menu'>
      <div className='nav-menu-title'>
        {Strings.navMenu.title}
      </div>
      <div
        className='nav-menu-open-folders'
        onClick={openAllNavFolders}
      >
        <i
          className={Icons.navMenu.openFolders}
          onClick={openAllNavFolders}
        />
        <div className='nav-menu-tooltip'>
          {Strings.navMenu.openFolders}
        </div>
      </div>
      <div
        className='nav-menu-close-folders'
        onClick={closeAllNavFolders}
      >
        <i
          className={Icons.navMenu.closeFolders}
          onClick={openAllNavFolders}
        />
        <div className='nav-menu-tooltip'>
          {Strings.navMenu.closeFolders}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;

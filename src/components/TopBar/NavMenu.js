import React from 'react';

const NavMenu = ({ openAllNavFolders, closeAllNavFolders }) => {


  return (
    <div className='nav-menu'>
      Organized Bookmarks
      <div
        className='nav-menu-button'
        onClick={openAllNavFolders}
      >
        <i className='chevron down icon' />
      </div>
      <div
        className='nav-menu-button'
        onClick={closeAllNavFolders}
      >
        <i className='chevron up icon' />
      </div>
    </div>
  );
};

export default NavMenu;

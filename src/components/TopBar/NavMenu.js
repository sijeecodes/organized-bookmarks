import React from 'react';

const NavMenu = ({ openAllNavFolders, closeAllNavFolders }) => {
  

  return (
    <div className='nav-menu'>
      Organized Bookmarks
      <div
        className='nav-menu-button'
        onClick={openAllNavFolders}
      >
        open
      </div>
      <div
        className='nav-menu-button'
        onClick={closeAllNavFolders}
      >
        close
      </div>
    </div>
  );
};

export default NavMenu;

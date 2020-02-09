import React from 'react';

const AddFolder = ({ addFolder, state }) => {

  return (
    <div
      className='addfolder-container'
      onClick={() => addFolder(state.currentFolder)}
    >
      <div className='addfolder-folder-icon'>
        <i className='folder outline icon' />
      </div>
      <div className='addfolder-plus-icon'>
        <i className='plus icon' />
      </div>
      <div className='addfolder-tooltip'>
        Add Folder
      </div>
    </div>
  );
};

export default AddFolder;

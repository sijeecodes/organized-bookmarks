import React from 'react';
import Icons from '../Icons';
import Strings from '../Strings';

const AddFolder = ({ addFolder, state }) => {

  return (
    <div
      className='addfolder-container'
      onClick={() => addFolder(state.currentFolder)}
    >
      <div className='addfolder-folder-icon'>
        <i className={Icons.addFolder.folder} />
      </div>
      <div className='addfolder-plus-icon'>
        <i className={Icons.addFolder.plus} />
      </div>
      <div className='addfolder-tooltip'>
        {Strings.addFolder.title}
      </div>
    </div>
  );
};

export default AddFolder;

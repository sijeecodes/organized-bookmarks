import React from 'react';

const FolderConfigModal = ({ targetNode, updateTree, toggleConfigModal }) => {
  return (
    <div
      className='modal-background-clear'
      onClick={() => toggleConfigModal('close')}
    >
      <div
        className='modal-container'
        onClick={() => toggleConfigModal('close')}
      >
        some folder config options...
      </div>
    </div>
  );
}

export default FolderConfigModal;

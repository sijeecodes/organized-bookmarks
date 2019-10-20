import React from 'react';

const LinkConfigModal = ({ targetNode, updateTree, toggleConfigModal }) => {
  return (
    <div
      className='modal-background-clear'
      onClick={() => toggleConfigModal('close')}
    >
      <div
        className='modal-container'
        onClick={() => toggleConfigModal('close')}
      >
        some link options...
      </div>
    </div>
  );
}

export default LinkConfigModal;

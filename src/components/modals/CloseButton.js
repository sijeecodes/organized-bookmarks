import React from 'react';

const CloseButton = ({ value, trigger }) => {
  return (
    <div className='modal-box-close-button'
      onClick={() => trigger(value)}>
      <div className='modal-box-close-button-icon'>
        <i className='close icon' />
      </div>
    </div>
  );
};

export default CloseButton;

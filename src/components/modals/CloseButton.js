import React from 'react';
import Icons from '../Icons';

const CloseButton = ({ value, trigger }) => {
  return (
    <div className='modal-box-close-button'
      onClick={() => trigger(value)}>
      <div className='modal-box-close-button-icon'>
        <i className={Icons.configModal.closeButton} />
      </div>
    </div>
  );
};

export default CloseButton;

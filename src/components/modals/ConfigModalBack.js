import React from 'react';

const ConfigModalBack = ({ children, toggleConfigModal }) => {
  return (
    <div className='modal-wrapper'>
      <div
        className='modal-top-background'
        onClick={() => toggleConfigModal('close')}
      />
      <div
        className='modal-middle-background-wrapper'
      >
        <div
          className='modal-middle-background'
          onClick={() => toggleConfigModal('close')}
        />
        {children}
        <div
          className='modal-middle-background'
          onClick={() => toggleConfigModal('close')}
        />
      </div>
      <div
        className='modal-bottom-background'
        onClick={() => toggleConfigModal('close')}
      />
    </div>
  );
};

export default ConfigModalBack;

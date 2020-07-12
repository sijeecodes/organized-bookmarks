import React from 'react';
import CloseButton from './CloseButton';
import Strings from '../Strings';

const SettingsModal = ({
  toggleConfigModal
}) => {
  const updateChanges = () => {
    console.log('update changes');
  };

  return (
    <>
      <div
        className='modal-background'
        onClick={() => toggleConfigModal('close')}
      />
      <div
        className='modal-box'
        onClick={e => e.stopPropagation()}
      >
        <CloseButton
          value='close'
          trigger={toggleConfigModal}
        />
        <form
          className='modal-form'
          onSubmit={updateChanges}
        >
          <input
            className='modal-right-button'
            type='submit'
            value={Strings.configModal.submitButton}
          />
          <button
            className='modal-right-button'
            type='button'
            onClick={() => toggleConfigModal('close')}
          >
            {Strings.configModal.cancelButton}
          </button>
        </form>
      </div>
    </>
  );
};

export default SettingsModal;

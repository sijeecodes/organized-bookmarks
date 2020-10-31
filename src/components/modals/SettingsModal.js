import React, { useState } from 'react';
import CloseButton from './CloseButton';
import Strings from '../Strings';

const SettingsModal = ({
  state,
  toggleConfigModal,
  setShortcuts
}) => {
  const updateChanges = () => {
    console.log('update changes. state data: ', state);
    console.log('update changes. setShortcuts: ', setShortcuts);
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
          <div className='modal-form-inbox'>
            ShortCut Settings
            <div className='modal-form-inbox-text'>
              Press number keys to move to the numbered shortcut url.
            </div>
          </div>
          <div className='modal-buttons-container'>
            <button
              className='modal-left-button-long'
            >
              {Strings.SettingsModal.resetButton}
            </button>
            <input
              className='modal-right-button'
              type='submit'
              value={Strings.SettingsModal.submitButton}
            />
            <button
              className='modal-right-button'
              type='button'
              onClick={() => toggleConfigModal('close')}
            >
              {Strings.SettingsModal.cancelButton}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SettingsModal;

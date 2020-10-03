import React, { useState } from 'react';
import CloseButton from './CloseButton';
import InputBox from './InputBox';
import Shortcuts from './Shortcuts';
import Tags from './Tags';
import Strings from '../Strings';

const SettingsModal = ({
  state,
  toggleConfigModal,
  setTags,
  setShortcuts
}) => {
  const updateChanges = () => {
    console.log('update changes. state data: ', state);
    console.log('update changes. setTags: ', setTags);
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
          <div className='modal-buttons-container'>
            <button
              className='modal-left-button'
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

import React, { useState } from 'react';
import CloseButton from './CloseButton';
import Strings from '../Strings';
import ShortcutList from './ShortcutList';

const ShortcutListModal = ({
  match,
  state,
  toggleConfigModal,
  setShortcuts,
  setCurrentFolder
}) => {
  const shortcutPreset = {
    0: {title: '', url: ''},
    1: {title: '', url: ''},
    2: {title: '', url: ''},
    3: {title: '', url: ''},
    4: {title: '', url: ''},
    5: {title: '', url: ''},
    6: {title: '', url: ''},
    7: {title: '', url: ''},
    8: {title: '', url: ''},
    9: {title: '', url: ''},
  };
  const [newShortcuts, setNewShortcuts] = useState(state.shortcuts);
  const updateChanges = (event) => {
    event.preventDefault();
    setShortcuts(newShortcuts);
    toggleConfigModal('close');
  };

  return (
    <>
      <div
        className='modal-background'
        onClick={() => toggleConfigModal('close')}
      />
      <div
        className='modal-box-list'
        onClick={e => e.stopPropagation()}
      >
        <CloseButton
          value='close'
          trigger={toggleConfigModal}
        />
        <div className='modal-form'>
          <div className='modal-form-inbox'>
            {Strings.shortcutListModal.title}
            <div className='modal-form-inbox-text'>
              {Strings.shortcutListModal.subtitle}
            </div>
          </div>
          <ShortcutList
            match={match}
            state={state}
            newShortcuts={newShortcuts}
            setNewShortcuts={setNewShortcuts}
            toggleConfigModal={toggleConfigModal}
            setCurrentFolder={setCurrentFolder}
          />
          <div className='modal-buttons-container'>
            <div
              className='modal-left-button'
              onClick={() => setNewShortcuts(shortcutPreset)}
            >
              {Strings.shortcutListModal.resetButton}
            </div>
            <div
              className='modal-right-button'
              onClick={updateChanges}
            >
              {Strings.shortcutListModal.submitButton}
            </div>
            <div
              className='modal-right-button'
              onClick={() => toggleConfigModal('close')}
            >
              {Strings.shortcutListModal.cancelButton}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortcutListModal;

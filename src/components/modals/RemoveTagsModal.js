import React, { useState } from 'react';
import CloseButton from './CloseButton';
import TagsIconList from './TagsIconList';
import Strings from '../Strings';

const RemoveTagsModal = ({
  state,
  toggleConfigModal,
  removeTags
}) => {
  const [newTags, setNewTags] = useState([]);
  const updateChanges = (event) => {
    event.preventDefault();
    toggleConfigModal('close');
    removeTags(newTags);
  };

  const removeAllTags = (event) => {
    event.preventDefault();
    toggleConfigModal('close');
    removeTags(['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey']);
  }

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
          <div className='modal-tags-config-text'>
            Select tags to remove.
          </div>
          <div className='modal-tags-config-selection'>
            <TagsIconList
              newTags={newTags}
              setNewTags={setNewTags}
            />
          </div>
          <div className='modal-buttons-container'>
            <button
              className='modal-left-button-long'
              onClick={e => removeAllTags(e)}
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

export default RemoveTagsModal;

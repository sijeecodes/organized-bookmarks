import React, { useState } from 'react';
import CloseButton from './CloseButton';
import InputBox from './InputBox';
import Shortcuts from './Shortcuts';
import Tags from './Tags';

const ConfigModal = ({
  match,
  state,
  targetNode,
  updateTree,
  toggleConfigModal,
  removeById,
  setCurrentFolder,
  setTags,
  setShortcuts
}) => {
  let isUrl, deleteButton, urlBox = '';
  let tagData = state.tags[targetNode.id] ? state.tags[targetNode.id] : [];

  const [newTags, setNewTags] = useState(tagData);
  const [newTitle, setNewTitle] = useState(targetNode.title);
  const [newUrl, setNewUrl] = useState(targetNode.url ? targetNode.url : '');
  const [newShortcuts, setNewShortcuts] = useState(state.shortcuts);

  const doSetNewTags = tags => setNewTags(tags);
  const doSetNewTitle = title => setNewTitle(title);
  const doSetNewUrl = url => setNewUrl(url);
  const doSetNewShortcuts = shortcuts => setNewShortcuts(shortcuts);

  if(targetNode.url) {
    isUrl = true;
    deleteButton = 'Delete Favorite';
    urlBox = (
      <InputBox
        name='Url'
        value={newUrl}
        setValue={doSetNewUrl}
      />
    );
  } else {
    isUrl = false;
    deleteButton = 'Delete Folder';
  }

  const tryRemoveById = (event) => {
    event.preventDefault();
    toggleConfigModal('close')
    if(isUrl) {
      removeById(targetNode.id);
    } else {
      if(targetNode.children.length > 0) {
        alert('Cannot delete folder with contents.')
        setCurrentFolder(targetNode.id);
      } else {
        if(targetNode.parentId) {
          setCurrentFolder(targetNode.parentId);
        } else {
          setCurrentFolder(1);
        }
        window.location = `#/${targetNode.parentId}/${match.params.displayMode}`
        removeById(targetNode.id);
      }
    }
  };

  const updateChanges = (event) => {
    event.preventDefault();
    if(isUrl) {
      updateTree({
        id: targetNode.id,
        newTitle,
        newUrl
      });
    } else {
      updateTree({
        id: targetNode.id,
        newTitle
      });
    }
    toggleConfigModal('close');
    setTags({id: targetNode.id, tags: newTags});
    setShortcuts(newShortcuts);
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
        <div className='modal-divider' />
        <form
          className='modal-form'
          onSubmit={updateChanges}
        >
          <InputBox
            name='Title'
            value={newTitle}
            setValue={doSetNewTitle}
          />
          {urlBox}
          <Tags
            newTags={newTags}
            setNewTags={doSetNewTags}
          />
          <Shortcuts
            id={targetNode.id}
            newShortcuts={newShortcuts}
            setNewShortcuts={doSetNewShortcuts}
          />
          <div className='modal-buttons-container'>
            <button
              className='modal-delete-button'
              onClick={tryRemoveById}
            >
              {deleteButton}
            </button>
            <input type='submit' value='Submit' />
            <button
              onClick={() => toggleConfigModal('close')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ConfigModal;

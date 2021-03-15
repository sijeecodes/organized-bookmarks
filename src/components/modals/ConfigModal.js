import React, { useState } from 'react';
import CloseButton from './CloseButton';
import InputBox from './InputBox';
import Shortcuts from './Shortcuts';
import Tags from './Tags';
import Strings from '../Strings';

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
  let isUrl, urlBox = '';
  let tagData = state.tags[targetNode.id] ? state.tags[targetNode.id] : [];

  const [newTags, setNewTags] = useState(tagData);
  const [newTitle, setNewTitle] = useState(targetNode.title);
  const [newUrl, setNewUrl] = useState(targetNode.url ? targetNode.url : '');
  const [newShortcuts, setNewShortcuts] = useState(state.shortcuts);

  if(targetNode.url) {
    isUrl = true;
    urlBox = (
      <InputBox
        name={Strings.configModal.urlTitle}
        value={newUrl}
        setValue={setNewUrl}
      />
    );
  } else {
    isUrl = false;
  }

  const tryRemoveById = (event) => {
    event.preventDefault();
    if(isUrl) {
      if(window.confirm('Delete this Bookmark?')) {
        toggleConfigModal('close')
        removeById(targetNode.id);
      }
    } else {
      if(targetNode.children.length > 0) {
        alert('Cannot delete folder with contents.');
      } else {
        if(window.confirm('Delete this Folder?')) {
          toggleConfigModal('close')
          if(targetNode.parentId) {
            setCurrentFolder(targetNode.parentId);
          } else {
            setCurrentFolder(1);
          }
          window.location = `#/${targetNode.parentId}/${match.params.displayMode}`
          removeById(targetNode.id);
        }
      }
    }
  };

  const updateChanges = (event) => {
    event.preventDefault();
    if(isUrl) {
      updateTree({
        isUrl,
        id: targetNode.id,
        title: newTitle,
        url: newUrl
      });
    } else {
      updateTree({
        isUrl,
        id: targetNode.id,
        title: newTitle
      });
    }
    toggleConfigModal('close');

    let sortedNewTags = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey'];
    let sortCount = sortedNewTags.length;
    let tempTags = state.tags;
    for(let i = 0; i < sortCount; i++) {
      if(newTags.indexOf(sortedNewTags[i]) === -1) {
        sortedNewTags.splice(i, 1);
        sortCount--;
        i--;
      }
    }
    if(sortedNewTags.length === 0) {
      delete tempTags[targetNode.id];
    } else {
      tempTags[targetNode.id] = sortedNewTags;
    }
    setTags(tempTags);
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
        <div className='modal-form'>
          <InputBox
            name={Strings.configModal.configModalTitle}
            value={newTitle}
            setValue={setNewTitle}
          />
          {urlBox}
          <Tags
            newTags={newTags}
            setNewTags={setNewTags}
          />
          <Shortcuts
            id={targetNode.id}
            newShortcuts={newShortcuts}
            setNewShortcuts={setNewShortcuts}
          />
          <div className='modal-buttons-container'>
            <div
              className='modal-left-button'
              onClick={tryRemoveById}
            >
              {Strings.configModal.deleteButton}
            </div>
            <div
              className='modal-right-button'
              onClick={updateChanges}
            >
              {Strings.configModal.submitButton}
            </div>
            <div
              className='modal-right-button'
              onClick={() => toggleConfigModal('close')}
            >
              {Strings.configModal.cancelButton}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigModal;

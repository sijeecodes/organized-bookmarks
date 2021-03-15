import React, { useState } from 'react';
import CloseButton from './CloseButton';
import Icons from '../Icons';
import Strings from '../Strings';

const ConfigTagsModal = ({
  state,
  toggleConfigModal,
  setTags,
  setTagNames
}) => {
  const [newTags, setNewTags] = useState({
    'red': { name: state.tagNames.red, removeTags: false, color: 'red' },
    'orange': { name: state.tagNames.orange, removeTags: false, color: 'orange' },
    'yellow': { name: state.tagNames.yellow, removeTags: false, color: 'yellow' },
    'green': { name: state.tagNames.green, removeTags: false, color: 'green' },
    'blue': { name: state.tagNames.blue, removeTags: false, color: 'blue' },
    'purple': { name: state.tagNames.purple, removeTags: false, color: 'purple' },
    'grey': { name: state.tagNames.grey, removeTags: false, color: 'grey' }
  });

  const updateTag = (el, titleFlag, newName) => {
    let tempNewTags = {...newTags};
    if(titleFlag === 'title') {
      tempNewTags[el].name = newName;
    } else {
      tempNewTags[el].removeTags = !tempNewTags[el].removeTags;
    }
    setNewTags(tempNewTags);
  };

  const getRemoveTagsList = () => {
    let removeTagsList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey'];
    let tagsListCounter = 0;
    Object.keys(newTags).forEach(el => {
      if(!newTags[el].removeTags){
        removeTagsList.splice(tagsListCounter, 1);
        tagsListCounter--;
      }
      tagsListCounter++;
    });
    return removeTagsList;
  };

  const updateChanges = (event) => {
    event.preventDefault();
    toggleConfigModal('close');
    let removeTagsList = getRemoveTagsList();
    let tagsResult = {...state.tags};
    Object.keys(state.tags).forEach(el => {
      for(let i = 0; i < removeTagsList.length; i++) {
        tagsResult[el].splice(tagsResult[el].indexOf(removeTagsList[i]), 1);
      }
    });
    setTags(tagsResult);

    let newTagNames = {};
    Object.keys(newTags).forEach(el => {
      newTagNames[el] = newTags[el].name;
    });
    setTagNames(newTagNames);
  };

  const removeAllTags = (event) => {
    event.preventDefault();
    let tempNewTags = {...newTags};
    Object.keys(newTags).forEach(el => {
      tempNewTags[el].removeTags = true;
    });
    setNewTags(tempNewTags);
  };

  let tagsHtml = [];
  Object.keys(newTags).forEach(el => {
    let removeTagBtn = 'modal-tags-config-discard-button';
    if(newTags[el].removeTags) {
      removeTagBtn = 'modal-tags-config-discard-button-on';
    }

    tagsHtml.push(
      <div className='modal-tags-config-item'>
        <div
          className='modal-tags-config-tag-icon'
          style= {{ color: `${newTags[el].color}`}}
        >
          <i className={Icons.configModal.tag} />
        </div>
        <div className='modal-tags-config-inputbox-container'>
          <input
            className='modal-tags-config-inputbox-title'
            type='text'
            value={newTags[el].name}
            onChange={e => updateTag(el, 'title', e.target.value)}
          />
        </div>
        <div
          className={removeTagBtn}
          onClick={() => updateTag(el)}
        >
          <i className={Icons.tags.discard} />
          <div className='modal-tags-config-discard-button-tooltip'>
            {Strings.configTagsModal.discardTooltipFront}
            '{newTags[el].name}'
            {Strings.configTagsModal.discardTooltipEnd}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div
        className='modal-background'
        onClick={() => toggleConfigModal('close')}
      />
      <div
        className='modal-tags-config-box'
        onClick={e => e.stopPropagation()}
      >
        <CloseButton
          value='close'
          trigger={toggleConfigModal}
        />
        <div className='modal-form'>
          <div className='modal-form-inbox'>
            {Strings.configTagsModal.title}
            <div className='modal-form-inbox-text'>
              {Strings.configTagsModal.subtitle}
            </div>
          </div>
          <div className='modal-tags-config-item-container'>
            {tagsHtml}
          </div>
          <div className='modal-buttons-container'>
            <div
              className='modal-left-button'
              onClick={e => removeAllTags(e)}
            >
              {Strings.configTagsModal.resetButton}
            </div>
            <div
              className='modal-right-button'
              onClick={e => updateChanges(e)}
            >
              {Strings.configTagsModal.submitButton}
            </div>
            <div
              className='modal-right-button'
              onClick={() => toggleConfigModal('close')}
            >
              {Strings.configTagsModal.cancelButton}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigTagsModal;

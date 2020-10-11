import React from 'react';
import TagsIconList from './TagsIconList';
import Strings from '../Strings';

const Tags = ({ newTags, setNewTags }) => {
  return (
    <div className='modal-tags-container'>
      <div className='modal-tags-title'>
        {Strings.configModal.tagsTitle}
      </div>
      <div className='modal-tags'>
        <TagsIconList
          newTags={newTags}
          setNewTags={setNewTags}
        />
      </div>
    </div>
  );
};

export default Tags;

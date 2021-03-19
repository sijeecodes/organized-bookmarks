import React from 'react';
import Strings from '../Strings';
import Icons from '../Icons';

const Tags = ({ tagFilter, tagNames, setTagFilter, toggleConfigModal }) => {
  let tagOptionsHtml = [];
  let allTags = {
    red: [tagNames.red, false],
    orange: [tagNames.orange, false],
    yellow: [tagNames.yellow, false],
    green: [tagNames.green, false],
    blue: [tagNames.blue, false],
    purple: [tagNames.purple, false],
    grey: [tagNames.grey, false],
  };

  if(tagFilter.length > 0) {
    tagFilter.forEach(el => {
      allTags[el][1] = true;
    });
  }

  const onPress = (tag) => {
    let temp = tagFilter;
    if(tagFilter.indexOf(tag) === -1) {
      temp.push(tag);
    } else {
      temp.splice(tagFilter.indexOf(tag), 1);
    }
    setTagFilter(temp);
  };

  Object.keys(allTags).forEach(tag => {
    let tagBackground = 'tag-option';
    let tagName = allTags[tag][0];

    if(allTags[tag][1]) {
      tagBackground = 'tag-option-selected'
    }

    tagOptionsHtml.push(
      <div
        className={tagBackground}
        onClick={() => onPress(tag)}
      >
        <div
          className='tag-option-icon'
          style={{ color: `${tag}`}}
        >
          <i className={Icons.tags.tag} />
        </div>
        <div className='tag-option-tooltip'>
          {tagName}
        </div>
      </div>
    );
  });

  return (
    <div className='tag-container'>
      {tagOptionsHtml}
      <div
        className='tag-option'
        onClick={e => {
          e.preventDefault();
          setTagFilter([]);
        }}
      >
        <div
          className='tag-option-icon'
          style={{ color: `white`}}
        >
          <i className={Icons.tags.tags} />
        </div>
        <div className='tag-option-tooltip'>
          {Strings.tags.clearTagFilter}
        </div>
        <div
          className='tag-option-icon-addon'
        >
          <i className={Icons.tags.undo} />
        </div>
      </div>
      <div
        className='tag-option'
        onClick={e => {
          e.preventDefault();
          toggleConfigModal('configTags');
        }}
      >
        <div
          className='tag-option-icon'
          style={{ color: `white`}}
        >
          <i className={Icons.tags.tags} />
        </div>
        <div className='tag-option-tooltip'>
          {Strings.tags.removeTags}
        </div>
        <div className='tag-option-icon-addon'>
          <i className={Icons.tags.config} />
        </div>
      </div>
    </div>
  );
};

export default Tags;

import React from 'react';
import Option from './Option';
import Strings from '../Strings';
import Icons from '../Icons';

const Tags = ({ tagFilter, setTagFilter }) => {
  let tagMenuHtml = [];
  let tagOptionsHtml = [];
  let allTags = {
    'red': [Strings.tags.red, false],
    'orange': [Strings.tags.orange, false],
    'yellow': [Strings.tags.yellow, false],
    'green': [Strings.tags.green, false],
    'blue': [Strings.tags.blue, false],
    'purple': [Strings.tags.purple, false],
    'grey': [Strings.tags.grey, false],
  };

  tagFilter.forEach(el => {
    allTags[el][1] = true;
  });

  const onPress = (tag) => {
    let temp = tagFilter;
    tagFilter.indexOf(tag) === -1 ? temp.push(tag) : temp.splice(tagFilter.indexOf(tag), 1);
    setTagFilter(temp);
  };

  Object.keys(allTags).forEach(tag => {
    if(allTags[tag][1]) {
      tagMenuHtml.push(
        <div
          className='tag-icon'
          style= {{ color: `${tag}`}}
        >
          <i className={Icons.tags.tag} />
        </div>
      );
    }

    tagOptionsHtml.push(
      <div
        className='tag-option'
        onClick={() => onPress(tag)}
      >
        <div
          className='tag-option-icon'
          style={{ color: `${tag}`}}
        >
          <i className={Icons.tags.tag} />
        </div>
        <div className='tag-option-title'>
          {allTags[tag][0]}
          <Option
            type={allTags[tag][1]}
            target={true}
          />
        </div>
      </div>
    );
  });

  if(tagMenuHtml.length === 0) {
    tagMenuHtml.push(
      <div className='tag-icon'>
        <i className={Icons.tags.tag} />
      </div>
    );
  }

  return (
    <div className='tag-container'>
      <div className='tag-icon-container'>
        {tagMenuHtml}
      </div>
      <div>
        <div className='tag-dropdown'>
          <div className='tag-title'>
            {Strings.tags.title}
          </div>
          {tagOptionsHtml}
        </div>
      </div>
    </div>
  );
};

export default Tags;

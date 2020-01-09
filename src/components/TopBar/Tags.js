import React from 'react';
import Option from './Option';
import Strings from '../Strings';

const Tags = ({ tagFilter, setTagFilter }) => {
  let resultHtml = [];
  let allTags = {
    'red': [Strings.tags.red, 'tag-onoff-button'],
    'orange': [Strings.tags.orange, 'tag-onoff-button'],
    'yellow': [Strings.tags.yellow, 'tag-onoff-button'],
    'green': [Strings.tags.green, 'tag-onoff-button'],
    'blue': [Strings.tags.blue, 'tag-onoff-button'],
    'purple': [Strings.tags.purple, 'tag-onoff-button'],
    'grey': [Strings.tags.grey, 'tag-onoff-button'],
  };

  tagFilter.forEach(el => {
    allTags[el][1] = 'tag-onoff-button-on';
  });

  const onPress = (tag) => {
    let temp = tagFilter;
    tagFilter.indexOf(tag) === -1 ? temp.push(tag) : temp.splice(tagFilter.indexOf(tag), 1);
    setTagFilter(temp);
  };

  Object.keys(allTags).forEach(tag => {
    resultHtml.push(
      <div
        className={allTags[tag][1]}
        onClick={() => onPress(tag)}
      >
        {allTags[tag][0]}
        <Option
          type={allTags[tag][1]}
          target={'tag-onoff-button-on'}
        />
      </div>
    );
  });

  return (
    <div className='tag-container'>
      <div className='tag'>
        Tag
        <div className='tag-aligner'>
          <div className='tag-dropdown'>
            {resultHtml}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;

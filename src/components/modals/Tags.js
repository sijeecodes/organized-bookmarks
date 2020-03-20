import React from 'react';
import Strings from '../Strings';
import Icons from '../Icons';

const Tags = ({ newTags, setNewTags }) => {
  let html = [];
  let allTags = {
    'red': [Strings.tags.red, false],
    'orange': [Strings.tags.orange, false],
    'yellow': [Strings.tags.yellow, false],
    'green': [Strings.tags.green, false],
    'blue': [Strings.tags.blue, false],
    'purple': [Strings.tags.purple, false],
    'grey': [Strings.tags.grey, false],
  };

  newTags.forEach(el => {
    allTags[el][1] = true;
  });

  const onPress = (tag) => {
    let temp = [...newTags];
    if(newTags.indexOf(tag) === -1) {
      temp.push(tag);
    } else {
      temp.splice(newTags.indexOf(tag), 1);
    }
    setNewTags(temp);
  };

  Object.keys(allTags).forEach(tag => {
    let tagClassName = 'modal-tag-off';
    if(allTags[tag][1]) {
      tagClassName = 'modal-tag-on';
    }
    html.push(
      <div
        className={tagClassName}
        onClick={() => onPress(tag)}
      >
        <div
          className='modal-tag-icon'
          style= {{ color: `${tag}`}}
        >
          <i className={Icons.configModal.tag} />
        </div>
      </div>
    );
  })

  return (
    <div className='modal-tags-container'>
      <div className='modal-tags-title'>
        {Strings.configModal.tagsTitle}
      </div>
      <div className='modal-tags'>
        {html}
      </div>
    </div>
  );
};

export default Tags;

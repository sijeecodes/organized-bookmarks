import React from 'react';
import Icons from '../Icons';

const ItemTag = ({ tags }) => {
  if(!tags) {
    return (
      <div></div>
    );
  }

  let itemTagHtml = [];
  tags.forEach(tag => {
    itemTagHtml.push(
      <div
        className='item-tag'
        style= {{ color: `${tag}`}}
      >
        <i className={Icons.tags.tag} />
      </div>
    );
  });

  return (
    <div className='item-tags'>
      {itemTagHtml}
    </div>
  );
};

export default ItemTag;

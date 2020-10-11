import React from 'react';
import Icons from '../Icons';

const Option = ({ type, target }) => {
  if(type === target) {
    return (
      <div className='option-select'>
        <i className={Icons.tags.check}></i>
      </div>
    );
  } else {
    return (
      <div className='option-select-hide'>
        <i className={Icons.tags.check}></i>
      </div>
    );
  }
};

export default Option;

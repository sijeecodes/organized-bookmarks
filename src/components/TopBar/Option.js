import React from 'react';
import Icons from '../Icons';

const Option = ({ type, target }) => {
  if(type === target) {
    return (
      <div className='option-select'>
        <i class="check icon"></i>
      </div>
    );
  } else {
    return (
      <div className='option-select-hide'>
        <i class="check icon"></i>
      </div>
    );
  }
};

export default Option;

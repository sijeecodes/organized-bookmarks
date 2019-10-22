import React from 'react';

const Option = ({ type, target }) => {
  if(type === target) {
    return (
      <div className='option-selected'>
        (O)
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Option;

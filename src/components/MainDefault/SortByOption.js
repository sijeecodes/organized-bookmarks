import React from 'react';

const SortByOption = ({ mainSortType, target }) => {
  if(mainSortType === target) {
    return (
      <div className='sort-option-selected'>
        (O)
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default SortByOption;

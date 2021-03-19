import React from 'react';
import Strings from '../Strings';
import Icons from '../Icons';

const SortBy = ({ mainSortType, setMainSortType }) => {
  const options = ['userDefined', 'alphabetical', 'recentlyAdded'];
  let resultHtml = [];
  let isSelectedSort = mainSortType;

  options.forEach(option => {
    let optionBackground = 'sort-option';
    let optionString, optionIcon;

    switch(option) {
      case 'alphabetical':
        optionString = Strings.sortBy.alphabetical;
        optionIcon = Icons.sortBy.alphabetical;
        break;
      case 'recentlyAdded':
        optionString = Strings.sortBy.recentlyAdded;
        optionIcon = Icons.sortBy.recentlyAdded;
        break;
      default:
        optionString = Strings.sortBy.userDefined;
        optionIcon = Icons.sortBy.userDefined;
    }

    if(option === isSelectedSort) {
      optionBackground = 'sort-option-selected';
    }

    resultHtml.push(
      <div
        className={optionBackground}
        onClick={() => setMainSortType(option)}
      >
        <div className='sort-option-icon'>
          <i className={optionIcon} />
        </div>
        <div className='sort-option-tooltip'>
          {optionString}
        </div>
      </div>
    );

    return ;
  });

  return (
    <div className='sort-container'>
        {resultHtml}
    </div>
  );
};

export default SortBy;

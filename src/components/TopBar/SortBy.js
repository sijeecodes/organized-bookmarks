import React from 'react';
import Option from './Option';
import Strings from '../Strings';
import Icons from '../Icons';

const SortBy = ({ mainSortType, setMainSortType }) => {
  const options = ['userDefined', 'alphabetical', 'recentlyAdded'];
  let resultHtml = [];
  let currentIcon;

  switch(mainSortType) {
    case 'alphabetical':
      currentIcon = 'sort alphabet down icon';
      break;
    case 'recentlyAdded':
      currentIcon = 'sort numeric down icon';
      break;
    default:
      currentIcon = 'sort amount down icon';
  }

  options.forEach(option => {
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

    resultHtml.push(
      <div
        className='sort-option'
        onClick={() => setMainSortType(option)}
      >
        <div className='sort-option-icon'>
          <i className={optionIcon} />
        </div>
        <div className='sort-option-title'>
          {optionString}
          <Option
            type={mainSortType}
            target={option}
          />
        </div>
      </div>
    );

    return ;
  });

  return (
    <div className='sort-container'>
      <div className='sort-icon'>
        <i className={currentIcon} />
      </div>
      <div className='sort-dropdown'>
        <div className='sort-title'>
          {Strings.sortBy.title}
        </div>
        {resultHtml}
      </div>
    </div>
  );
};

export default SortBy;

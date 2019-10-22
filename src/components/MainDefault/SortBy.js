import React from 'react';
import Option from './Option';

const SortBy = ({ mainSortType, setMainSortType }) => {
  return (
    <div className='sort-container'>
      <div className='sort'>
        Sortby
        <div className='sort-aligner'>
          <div className='sort-dropdown'>
            <div
              className='sort-option'
              onClick={() => setMainSortType('userDefined')}
            >
              User Default
              <Option
                type={mainSortType}
                target='userDefined'
              />
            </div>
            <div
              className='sort-option'
              onClick={() => setMainSortType('alphabetical')}
            >
              Alphabetical
              <Option
                type={mainSortType}
                target='alphabetical'
              />
            </div>
            <div
              className='sort-option'
              onClick={() => setMainSortType('recentlyAdded')}
            >
              Recently Added
              <Option
                type={mainSortType}
                target='recentlyAdded'
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SortBy;

// <div className='sort-dropdown'>

// </div>

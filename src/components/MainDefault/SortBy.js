import React from 'react';
import SortByOption from './SortByOption';

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
              <SortByOption
                mainSortType={mainSortType}
                target='userDefined'
              />
            </div>
            <div
              className='sort-option'
              onClick={() => setMainSortType('alphabetical')}
            >
              Alphabetical
              <SortByOption
                mainSortType={mainSortType}
                target='alphabetical'
              />
            </div>
            <div
              className='sort-option'
              onClick={() => setMainSortType('recentlyAdded')}
            >
              Recently Added
              <SortByOption
                mainSortType={mainSortType}
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

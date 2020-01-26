import React from 'react';
import Icons from '../Icons';

const DeepSearch = ({ searchType, setSearchType }) => {

  const changeSearchType = () => {
    if(searchType === 'default') {
      setSearchType('deepSearch');
    } else {
      setSearchType('default');
    }
  };

  return (
    <div
      className='deepSearch-container'
      onClick={() => changeSearchType()}
    >
      <div className='deepSearch-icon'>
        <i className={searchType === 'default' ? Icons.deepSearch.deepSearchOff : Icons.deepSearch.deepSearch} />
      </div>
      <div className='deepSearch-tooltip'>
        Toggle Deep Search
      </div>
    </div>
  );
};

export default DeepSearch;

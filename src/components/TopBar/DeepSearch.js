import React from 'react';
import Icons from '../Icons';
import Strings from '../Strings';

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
        {Strings.deepSearch.tooltip}
      </div>
    </div>
  );
};

export default DeepSearch;

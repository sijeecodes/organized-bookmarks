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
      className='deepsearch-container'
      onClick={() => changeSearchType()}
    >
      <div className={searchType === 'default' ? 'deepsearch-icon' : 'deepsearch-icon-on'}>
        <i className={Icons.deepSearch.deepSearch} />
      </div>
      <div className='deepsearch-tooltip'>
        {searchType === 'default' ? Strings.deepSearch.offTooltip : Strings.deepSearch.onTooltip}
      </div>
    </div>
  );
};

export default DeepSearch;

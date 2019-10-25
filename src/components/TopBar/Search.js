import React from 'react';
import Option from './Option'

const Search = ({ searchWord, setSearchWord, searchType, setSearchType }) => {
  const startSearch = (event) => {
    setSearchWord(event.target.value);
  };

  const searchTypeSetter = () => {
    if(searchType === 'default') {
      setSearchType('bookmark');
    } else {
      setSearchType('default');
    }
  }

  let buttonClassName = 'search-deep';
  if(searchType === 'default') {
    buttonClassName = 'search-deep-off'
  }

  return (
    <div className='search-wrapper'>
      <div className='search-flexbox'>
        <div
          className={buttonClassName}
          onClick={() => searchTypeSetter()}
        >
          Deep Search
          <Option
            type={searchType}
            target={'bookmark'}
          />
        </div>
        <input
          className='search-box'
          type='text'
          value={searchWord}
          onChange={e=> startSearch(e)}
        />
      </div>
    </div>
  );
};

export default Search;

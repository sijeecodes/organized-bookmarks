import React from 'react';
import Icons from '../Icons';

const Search = ({ searchWord, setSearchWord, searchFocused }) => {
  const startSearch = (event) => {
    setSearchWord(event.target.value);
  };

  const setSearchFocused = (status) => {
    searchFocused(status);
  }

  return (
    <div className='search-wrapper'>
      <div className='search-inbox-spacer'>
        <i className={Icons.search.search} />
      </div>
      <div className='search-inbox'>
      </div>
      <input
        className='search-box'
        type='text'
        value={searchWord}
        placeHolder='Search..'
        onChange={e=> startSearch(e)}
        onFocus={e=> setSearchFocused('on')}
        onBlur={e=> setSearchFocused('off')}
      />
    </div>
  );
};

export default Search;

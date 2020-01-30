import React from 'react';
import Icons from '../Icons';

const Search = ({ searchWord, setSearchWord }) => {
  const startSearch = (event) => {
    setSearchWord(event.target.value);
  };

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
      />
    </div>
  );
};

export default Search;

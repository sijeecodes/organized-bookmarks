import React, { useState } from 'react';

const Search = () => {
  const [searchWord, setSearchWord] = useState('');

  const startSearch = (value) => {
    setSearchWord(value);

  };


  return (
    <div className='search-wrapper'>
      <form onSubmit={() => console.log('triggered')}>
        <label>
          Search
          <input
            className='search-box'
            type='text'
            value={searchWord}
            onChange={e=> startSearch(e.target.value)}
          />
        </label>
        <input
          className='search-button'
          type='submit'
          value='Search'
        />
      </form>
    </div>
  );
};

export default Search;

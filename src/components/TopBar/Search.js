import React from 'react';
import Icons from '../Icons';

const Search = ({ searchFocused, searchWord, setSearchWord, setSearchFocused, setSearchType }) => {
  const startSearch = (event) => {
    setSearchWord(event.target.value);
  };

  const setSearchFocus = (status) => {
    setSearchFocused(status);
  };

  const resetSearchBox = () => {
    setSearchWord('');
    setSearchFocused('off');
    setSearchType('default');
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
        onChange={e => startSearch(e)}
        onFocus={e => setSearchFocus('on')}
        onBlur={e => setSearchFocus('off')}
      />
      { searchWord !== '' ?
        (
          <div
            className='search-box-empty-button'
            onClick={resetSearchBox}
          >
            <i className={Icons.search.empty} />
          </div>
        )
        : <></>
      }
    </div>
  );
};

export default Search;

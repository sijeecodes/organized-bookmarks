import React from 'react';
import Icons from '../Icons';

const Search = ({ searchFocused, searchWord, setSearchWord, setSearchFocused, setSearchType }) => {
  const startSearch = (event) => {
    setSearchWord(event.target.value);
  };

  const setSearchFocus = (status) => {
    if(status && searchWord === '') {
      setSearchType('deepSearch');
    }
    setSearchFocused(status);
  };

  const resetSearchBox = (e) => {
    setSearchWord('');
    setSearchFocused(true);
    e.target.parentNode.parentNode.childNodes[2].focus();
  };

  const checkKey = (e) => {
    if(e.key === 'Escape') {
      setSearchType('default');
      setSearchWord('');
      e.target.blur();
    } else if(e.key === 'Enter') {
      e.target.blur();
    }
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
        onChange={startSearch}
        onFocus={e => setSearchFocus(true)}
        onBlur={e => setSearchFocus(false)}
        onKeyDown={checkKey}
        tabIndex='-1'
        id='search-box-id'
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

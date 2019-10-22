import React from 'react';
import Option from './Option'

const Search = ({ searchWord, setSearchWord, searchType, setSearchType }) => {
  const startSearch = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <div className='search-wrapper'>
      <div className='search-flexbox'>
        <div className='search-box-container'>
          Search
          <div className='search-aligner'>
            <div className='search-dropdown'>
              <div
                className='search-option'
                onClick={() => setSearchType('default')}
              >
                Search just this folder
                <Option
                  type={searchType}
                  target='default'
                />
              </div>
              <div
                className='search-option'
                onClick={() => setSearchType('bookmark')}
              >
                Search whole Bookmark
                <Option
                  type={searchType}
                  target='bookmark'
                />
              </div>
            </div>
          </div>
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

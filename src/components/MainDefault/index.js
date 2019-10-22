import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import findInTree from '../../utils/findInTree';
import setFavicon from '../../utils/setFavicon';
import sortList from '../../utils/sortList';
import searchInTree from '../../utils/searchInTree';
import searchWholeTree from '../../utils/searchWholeTree';

const MainDefault = ({
  match,
  state,
  setCurrentFolder,
  setMainColumn,
  toggleConfigModal,
  setMainSortType,
  setSearchWord,
  setSearchType
}) => {

  if(typeof state !== 'undefined' && state.tree) {
    let subTree;

    if(state.searchType === 'default' || state.searchWord === '') {
      subTree = findInTree(state.tree, match.params.id);
      subTree = searchInTree(subTree.children, state.searchWord);
    } else {
      subTree = searchWholeTree(state.tree[0].children, state.searchWord);
    }

    if(subTree.length > 0) {
      subTree = setFavicon(subTree);
      subTree = sortList(subTree, state.mainSortType);
    }

    let addedUpHtml = [];
    let columnCounter = 0;
    let columnMax = state.mainColumn;
    let tempHtml = [];
    console.log('subtree is ... ', subTree);

    for(let i = 0; i < subTree.length; i++) {
      if(subTree[i].url) {
        tempHtml.push(
          <div className='main-item-wrapper'>
            <a className='main-item' href={subTree[i].url}>
              <img
                className='icon-favicon'
                src={`chrome://favicon/${subTree[i].favicon}`}
                alt='icon' />
              <div className='main-item-title' >
                {subTree[i].title}
              </div>
            </a>
            <div
              className='main-item-config'
              id={`main-${subTree[i].id}`}
              onClick={e => toggleConfigModal(e.target.id)}
            >
              (O)
            </div>
          </div>
        );
      } else {
        tempHtml.push(
          <div className='main-item-wrapper'>
            <Link
              to={`/${subTree[i].id}/${match.params.displayMode}`}
              className='main-item'
              onClick={() => setCurrentFolder(subTree[i].id)}
            >
              <div className='main-item-title'>
                {subTree[i].title}
              </div>
            </Link>
            <div
              className='main-item-config'
              id={`main-${subTree[i].id}`}
              onClick={e => toggleConfigModal(e.target.id)}
            >
              (O)
            </div>
          </div>
        );
      }
      if(i === subTree.length - 1 && columnCounter !== columnMax - 1) {
        tempHtml.push(
          <div className='main-item-dummy'>
          </div>
        );
        columnCounter++;
      }
      columnCounter++;
      if(columnCounter === columnMax) {
        addedUpHtml.push(<div className='main-container'>{tempHtml}</div>);
        tempHtml = [];
        columnCounter = 0;
      }
    }

    return (
      <div className='main'>
        <MainMenu
          state={state}
          setMainColumn={setMainColumn}
          setMainSortType={setMainSortType}
          setSearchWord={setSearchWord}
          setSearchType={setSearchType}
        />
        {addedUpHtml}
      </div>
    );
  } else {
    return <div>main</div>;
  }
};

export default MainDefault;

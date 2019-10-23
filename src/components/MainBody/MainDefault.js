import React from 'react';
import { Link } from 'react-router-dom';
import ItemTag from './ItemTag';
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
  setSearchType,
  setIsDragging,
  moveBookmark
}) => {

  if(typeof state !== 'undefined' && state.tree) {
    let subTree;

    const onDropEvent = (event, targetParentId, targetIndex) => {
      event.stopPropagation();
      console.log('dropped in folder');
      const temp = state.isDragging.split('-');
      moveBookmark(temp[temp.length-1], targetParentId, targetIndex);
      setIsDragging(false);
    }

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
          <div
            className='main-item-wrapper'

          >
            <a
              className='main-item'
              id={`main-item-${subTree[i].id}`}
              href={subTree[i].url}
              draggable
              onDragStart={e => {
                console.log('start drag');
                setIsDragging(e.target.id);
              }}
              onDragOver={e => e.preventDefault()}
              onDrop={e => onDropEvent(e, subTree[i].parentId, subTree[i].index)}
              onDragEnd={() => setIsDragging(false)}
            >
              <img
                className='icon-favicon'
                src={`chrome://favicon/${subTree[i].favicon}`}
                alt='icon' />
              <div className='main-item-title' >
                {subTree[i].title}
              </div>
            </a>
            <ItemTag />
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
              id={`main-item-${subTree[i].id}`}
              draggable
              onClick={() => setCurrentFolder(subTree[i].id)}
              onDragStart={e => {
                console.log('start drag');
                setIsDragging(e.target.id);
              }}
              onDragOver={e => e.preventDefault()}
              onDrop={e => onDropEvent(e, subTree[i].parentId, subTree[i].index)}
              onDragEnd={() => setIsDragging(false)}
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
        {addedUpHtml}
      </div>
    );
  } else {
    return <div>main</div>;
  }
};

export default MainDefault;

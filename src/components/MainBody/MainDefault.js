import React from 'react';
import { Link } from 'react-router-dom';
import ItemTag from './ItemTag';
import findInTree from '../../utils/findInTree';
import setFavicon from '../../utils/setFavicon';
import sortList from '../../utils/sortList';
import searchInTree from '../../utils/searchInTree';
import searchWholeTree from '../../utils/searchWholeTree';
import filterByTags from '../../utils/filterByTags';

const MainDefault = ({
  match,
  state,
  setCurrentFolder,
  setMainColumn,
  toggleConfigModal,
  setMainSortType,
  setSearchWord,
  setIsDragging,
  moveBookmark
}) => {
  if(typeof state === 'undefined' || state.tree === null) {
    return <div>Main</div>;
  }

  let subTree;
  let addedUpHtml = [];
  let columnCounter = 0;
  let columnMax = state.mainColumn;
  let tempHtml = [];
  const onDropEvent = (event, targetParentId, targetIndex) => {
    event.stopPropagation();
    const temp = state.isDragging.split('-');
    const prevIndex = temp[temp.length-2];
    
    if(targetIndex >= prevIndex) {
      targetIndex++;
    }
    moveBookmark(temp[temp.length-1], targetParentId, targetIndex);
    setIsDragging(false);
  }

  // console.log('components/MaindBody/MainDefault - first state. ', state);
  if(state.searchType === 'default') {
    subTree = findInTree(state.tree, match.params.id);
    subTree = searchInTree(subTree.children, state.searchWord);
  } else {
    subTree = searchWholeTree(state.tree[0].children, state.searchWord);
  }

  if(state.tagFilter.length > 0) {
    subTree = filterByTags(subTree, state.tags, state.tagFilter);
  }

  if(subTree.length > 0) {
    subTree = setFavicon(subTree);
    subTree = sortList(subTree, state.mainSortType);
  }

  for(let i = 0; i < subTree.length; i++) {
    if(subTree[i].url) {
      tempHtml.push(
        <div
          className='main-item-wrapper'
        >
          <a
            className='main-item'
            id={`main-item-${subTree[i].index}-${subTree[i].id}`}
            href={subTree[i].url}
            draggable
            onDragStart={e => {
              setIsDragging(e.target.id);
            }}
            onDragOver={e => e.preventDefault()}
            onDrop={e => onDropEvent(e, subTree[i].parentId, subTree[i].index)}
            onDragEnd={() => setIsDragging(false)}
          >
            <img
              className='icon-favicon'
              src={`chrome://favicon/${subTree[i].favicon}`}
              alt='icon'
              draggable='false'
            />
            <div className='main-item-title' >
              {subTree[i].title}
            </div>
          </a>
          <ItemTag tags={state.tags[subTree[i].id]} />
          <div
            className='main-item-config'
            id={`main-${subTree[i].id}`}
            onClick={e => toggleConfigModal(e.target.id)}
          >
            <i
              className='cogs icon'
              id={`main-${subTree[i].id}`}
              onClick={e => toggleConfigModal(e.target.id)}
            />
          </div>
        </div>
      );
    } else {
      tempHtml.push(
        <div className='main-item-wrapper'>
          <Link
            to={`/${subTree[i].id}/${match.params.displayMode}`}
            className='main-item'
            id={`main-item-${subTree[i].index}-${subTree[i].id}`}
            draggable
            onClick={() => setCurrentFolder(subTree[i].id)}
            onDragStart={e => {
              setIsDragging(e.target.id);
            }}
            onDragOver={e => e.preventDefault()}
            onDrop={e => onDropEvent(e, subTree[i].parentId, subTree[i].index)}
            onDragEnd={() => setIsDragging(false)}
          >
            <div className='main-item-folder-icon'>
              <i className='folder icon'></i>
            </div>
            <div className='main-item-folder-title'>
              {subTree[i].title}
            </div>
          </Link>
          <ItemTag tags={state.tags[subTree[i].id]} />
          <div
            className='main-item-config'
            id={`main-${subTree[i].id}`}
            onClick={e => toggleConfigModal(e.target.id)}
          >
            <i
              className='cogs icon'
              id={`main-${subTree[i].id}`}
              onClick={e => toggleConfigModal(e.target.id)}
            />
          </div>
        </div>
      );
    }
    columnCounter++;

    if(i === subTree.length - 1 && columnCounter !== columnMax) {
      for(let j = columnCounter; j !== columnMax; j++) {
        tempHtml.push(<div className='main-item-wrapper'></div>);
        columnCounter++;
      }
    }
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
};

export default MainDefault;

import React from 'react';
import { Link } from 'react-router-dom';
import ItemTag from './ItemTag';
import Icons from '../Icons';
import findInTree from '../../utils/findInTree';
import setFavicon from '../../utils/setFavicon';
import sortList from '../../utils/sortList';
import searchInTree from '../../utils/searchInTree';
import searchWholeTree from '../../utils/searchWholeTree';
import filterByTags from '../../utils/filterByTags';

const MainTab = ({
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
    return <div>Please Refresh Page</div>;
  }

  let subTree;
  let addedUpHtml = [];
  let lineCounter = 0;
  let lineMax = Math.floor((state.mainTabSize.height - 5 ) / 28);
  let columnTotal = 1;
  let columnPerTab = state.mainColumn;
  let columnWidth = state.mainTabSize.width;
  let tempHtml = [];

  const onDropEvent = (event, targetParentId, targetIndex) => {
    event.stopPropagation();
    const temp = state.isDragging.split('-');
    const prevIndex = temp[temp.length-2];

    if(targetIndex >= prevIndex) {
      targetIndex++;
    }
    if(targetParentId !== '0') {
      moveBookmark(temp[temp.length-1], targetParentId, targetIndex);
    }
    setIsDragging(false);
  }

  if(state.searchType === 'default') {
    subTree = findInTree(state.tree, match.params.id);
    if(subTree.children) {
      subTree = searchInTree(subTree.children, state.searchWord);
    } else {
      subTree = [];
    }
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
  if(subTree.length > lineMax) {
    columnTotal = Math.ceil(subTree.length / lineMax);

    if(columnTotal > columnPerTab) {
      columnWidth = (columnWidth / columnPerTab) - (columnWidth / columnPerTab / 5 / columnPerTab);
    } else {
      columnWidth = columnWidth / columnTotal;
    }
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
            tabIndex='-1'
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
              className={Icons.mainTab.config}
              id={`main-${subTree[i].id}-icon`}
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
            onClick={() => setCurrentFolder([subTree[i].id, subTree[i].parentId])}
            onDragStart={e => {
              setIsDragging(e.target.id);
            }}
            onDragOver={e => e.preventDefault()}
            onDrop={e => onDropEvent(e, subTree[i].parentId, subTree[i].index)}
            onDragEnd={() => setIsDragging(false)}
          >
            <div className='main-item-folder-icon'>
              <i className={Icons.mainTab.folder} />
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
              className={Icons.mainTab.config}
              id={`main-${subTree[i].id}`}
              onClick={e => toggleConfigModal(e.target.id)}
            />
          </div>
        </div>
      );
    }
    lineCounter++;

    if(lineCounter === lineMax || i === subTree.length - 1) {
      addedUpHtml.push(
        <div
          className='main-container'
          style={{ width: columnWidth }}
        >
          {tempHtml}
        </div>
      );
      tempHtml = [];
      lineCounter = 0;
    }
  }

  return (
    <div className='main-tab'>
      {addedUpHtml}
    </div>
  );
};

export default MainTab;

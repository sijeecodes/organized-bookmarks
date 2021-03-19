import React from 'react';
import { Link } from 'react-router-dom';
import Spacer from '../Spacer';
import ItemTag from './ItemTag';
import Icons from '../Icons';

const NavTab = ({
  match,
  state,
  setCurrentFolder,
  toggleConfigModal,
  setIsDragging,
  moveBookmark
}) => {
  if(typeof state === 'undefined' || state.tree === null) {
    return <div>nav</div>;
  }

  let resultHtml = [];
  const onDropEvent = (event, targetParentId, targetIndex) => {
    event.stopPropagation();
    let moveId = state.isDragging.split('-');
    moveId = moveId[moveId.length-1];

    if(moveId !== targetParentId && targetParentId !== '0') {
      if(targetIndex) {
        moveBookmark(moveId, targetParentId, targetIndex);
      } else {
        moveBookmark(moveId, targetParentId, 0);
      }
    }
    setIsDragging(false);
  }

  const dropBoxJSX = (className, id, index) => {
    return (
      <div
        className={className}
        style={{ height: 8 }}
        onDragOver={e => e.preventDefault()}
        onDrop={e => onDropEvent(e, id, index)}
      ></div>
    );
  };

  const bottomDropBoxJSX = (isOpenFolder, id, parentId, targetIndex) => {
    if(isOpenFolder) {
      return dropBoxJSX('nav-tab-item-dropbox-bottom', id, 0);
    } else {
      return dropBoxJSX('nav-tab-item-dropbox-bottom', parentId, targetIndex);
    }
  };

  const drawNavTab = (subTree, depth) => {
    if(state.openFolders.indexOf(subTree.parentId) !== -1 || subTree.id === '0') {
      if(subTree.children && subTree.parentId) {
        let navTabClassName = 'nav-tab-item';
        let navTabConfigClassName= 'nav-tab-item-config';
        let navTabIconType = Icons.navTab.closedFolder;
        let isOpenFolder = false;
        
        if(state.currentFolder === subTree.id || state.searchType === 'deepSearch') {
          navTabClassName = 'nav-tab-item-over';
          navTabConfigClassName = 'nav-tab-item-config-over';
          navTabIconType = Icons.navTab.currentFolder;
        }
        if(state.openFolders.indexOf(subTree.id) !== -1) {
          isOpenFolder = true;
          for(let i = 0; i < subTree.children.length; i++) {
            if(subTree.children[i].children && subTree.children[i].children.length > 0) {
              navTabIconType = Icons.navTab.openedFolder;
              break;
            }
          }
        }

        resultHtml.push(
          <div
            className='nav-tab-item-wrapper'
            id={`nav-tab-item-wrapper-${subTree.id}`}
            onDragOver={e => e.preventDefault()}
            onDrop={e => onDropEvent(e, subTree.id, 0)}
          >
            <div className='nav-tab-item-container'>
              <Spacer width={depth} />
              <Link
                to={`/${subTree.id}/${match.params.displayMode}`}
                className={navTabClassName}
                id={`nav-tab-item-${subTree.index}-${subTree.id}`}
                draggable
                onClick={() => setCurrentFolder([subTree.id])}
                onDragStart={e => {
                  setIsDragging(e.target.id);
                }}
                onDragEnd={() => setIsDragging(false)}
                tabIndex='-1'
              >
                <i className={navTabIconType}></i>
                <div className='nav-tab-item-title'>
                  {subTree.title}
                </div>
                <div className='nav-tab-item-tags-wrapper'>
                  <ItemTag tags={state.tags[subTree.id]} />
                </div>
                <div className='nav-tab-item-tail'>
                  {subTree.children.length}
                </div>
                <div
                  className={navTabConfigClassName}
                  id={`nav-${subTree.id}`}
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleConfigModal(e.target.id);
                  }}
                >
                  <i
                    className={Icons.navTab.config}
                    id={`nav-${subTree.id}-icon`}
                    onClick={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleConfigModal(e.target.id);
                    }}
                  />
                </div>
              </Link>

            </div>
            { state.isDragging ?
              dropBoxJSX('nav-tab-item-dropbox', subTree.parentId, subTree.index)
              : (<div></div>)
            }
            { state.isDragging ?
              bottomDropBoxJSX(isOpenFolder, subTree.id, subTree.parentId, subTree.index+1)
              : (<div></div>)
            }
          </div>
        );
      }
      if(subTree.children) {
        for(let i = 0; i < subTree.children.length; i++) {
          drawNavTab(subTree.children[i], depth + 1);
        }
      }
    }
  };
  drawNavTab(state.tree[0], 0);

  return (
    <>
      <div className='nav-tab'>
        {resultHtml}
      </div>
    </>
  );
};

export default NavTab;

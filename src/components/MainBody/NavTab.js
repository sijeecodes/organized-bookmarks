import React from 'react';
import { Link } from 'react-router-dom';
import Spacer from '../Spacer';

const NavTab = ({
  match,
  state,
  setCurrentFolder,
  toggleConfigModal,
  setIsDragging,
  moveBookmark
}) => {
  if(typeof state !== 'undefined' && state.tree !== null) {
    let resultHtml = [];

    const onDropEvent = (event, targetParentId, targetIndex) => {
      event.stopPropagation();
      const temp = state.isDragging.split('-');
      if(targetIndex) {
        moveBookmark(temp[temp.length-1], targetParentId, targetIndex);
      }
      setIsDragging(false);
    }

    const drawNavTab = (subTree, depth) => {
      if(state.openFolders.indexOf(subTree.parentId) !== -1 ||
      subTree.id === '0') {
        if(subTree.children && subTree.parentId) {
          let navTabClassName = 'nav-tab-item';
          if(state.currentFolder === subTree.id) {
            navTabClassName = 'nav-tab-item-over';
          }

          resultHtml.push(
            <div
              className='nav-tab-item-wrapper'
              id={`nav-tab-item-wrapper-${subTree.id}`}
              onDragOver={e => e.preventDefault()}
              onDrop={e => onDropEvent(e, subTree.id, null)}
            >
              <div className='nav-tab-item-container'>
                <Spacer width={depth} />
                <Link
                  to={`/${subTree.id}/${match.params.displayMode}`}
                  className={navTabClassName}
                  id={`nav-tab-item-${subTree.id}`}
                  draggable
                  onClick={() => setCurrentFolder(subTree.id)}
                  onDragStart={e => {
                    setIsDragging(e.target.id);
                  }}
                  onDragEnd={() => setIsDragging(false)}
                >
                  {subTree.title}
                  <div className='nav-tab-item-tail'>
                    {subTree.children.length}
                  </div>
                  <div className='nav-tab-item-config'>
                    <i
                      class="cogs icon"
                      id={`nav-${subTree.id}`}
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleConfigModal(e.target.id);
                      }}
                    />
                  </div>
                </Link>

              </div>
              { state.isDragging ? (
                <div
                  className='nav-tab-item-dropbox'
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => onDropEvent(e, subTree.parentId, subTree.index)}
                ></div>
              ) : (
                <div></div>
              )}
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
  } else {
    return <div>nav</div>;
  }

};

export default NavTab;

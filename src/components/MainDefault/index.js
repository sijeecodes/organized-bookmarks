import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import findInTree from '../../utils/findInTree';

const MainDefault = ({
  match,
  state,
  setCurrentFolder,
  setMainColumn,
  toggleConfigModal
}) => {

  if(typeof state !== 'undefined' && state.tree) {
    let subTree = findInTree(state.tree, match.params.id);
    const setFavicon = (tree) => {
      return tree.map(el => {
        if(el.url) {
          let source = el.url.split('/');
          el.favicon = source[0] + '//' + source[2];
        } else if(el.children) {
          setFavicon(el.children);
        }
        return el;
      });
    }
    subTree = setFavicon(subTree.children);

    let addedUpHtml = [];
    let columnCounter = 0;
    let columnMax = state.mainColumn;
    let tempHtml = [];

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
      if(i === subTree.length - 1) {
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
        <MainMenu state={state} setMainColumn={setMainColumn} />
        {addedUpHtml}
      </div>
    );
  } else {
    return <div>main</div>;
  }
};

export default MainDefault;

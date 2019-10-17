import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';

const MainDefault = ({ match, state, setCurrentFolder, toggleConfigModal }) => {
  console.log('trying to render MAIN', match);
  console.log('param?', match.params.id, match.params.displayMode);

  if(typeof state !== 'undefined' && state.tree) {
    console.log('RENDERING MAIN', state);
    // state.tree, state.currentFolder
    const findChildren = (tree, target) => {
      for(let i = 0; i < tree.length; i++) {
        if(tree[i].id === target) {
          return tree[i];
        } else if(tree[i].children) {
          if(findChildren(tree[i].children, target)) {
            return findChildren(tree[i].children, target);
          }
        }
      }
    }
    let subTree = findChildren(state.tree[0].children, match.params.id);

    const setFavicon = (tree) => {
      return tree.map(el => {
        console.log('element was ', el);

        if(el.url) {
          let source = el.url.split('/');
          el.favicon = source[0] + '//' + source[2];
        } else if(el.children) {
          setFavicon(el.children);
        }
        console.log('element is ', el);
        return el;
      });
    }
    subTree = setFavicon(subTree.children);
    console.log('ALL SET?? ', subTree);

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
              onClick={() => setCurrentFolder('1')}
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
              {subTree[i].title}
            </Link>
            <div
              className='main-item-config'
              onClick={(e) => toggleConfigModal(e)}
            >
              (O)
            </div>
          </div>
        );
      }
      columnCounter++;
      if(columnCounter === columnMax) {
        addedUpHtml.push(<div className='main-container'>{tempHtml}</div>);
        tempHtml = [];
        columnCounter = 0;
      }
    }

    console.log('Main!!! tab result is :', addedUpHtml);
    return (
      <div className='main'>
        <MainMenu />
        {addedUpHtml}
      </div>
    );
  } else {
    return <div>main</div>;
  }
};

export default MainDefault;

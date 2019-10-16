import React from 'react';
import { Link } from 'react-router-dom';

const MainDefault = ({ match, state, setCurrentFolder }) => {
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
    const subTree = findChildren(state.tree[0].children, match.params.id);

    let resultHtml = [];
    const drawMain = (data) => {
      for(let i = 0; i < data.length; i++) {
        if(data[i].url) {
          resultHtml.push(
            <a className='main-list' href={data[i].url}>
              {data[i].title}
            </a>
          );
        } else {
          resultHtml.push(
            <Link to={`/${data[i].id}/${match.params.displayMode}`} >
              <div
                className='main-list'
                onClick={() => setCurrentFolder(data[i].id)}
              >
                {data[i].title}
              </div>
            </Link>
          );
        }
      }
    };
    drawMain(subTree.children);

    console.log('Main!!! tab result is :', resultHtml);
    return <div className='nav-tab'>{resultHtml}</div>;
  } else {
    return <div>main</div>;
  }
};

export default MainDefault;

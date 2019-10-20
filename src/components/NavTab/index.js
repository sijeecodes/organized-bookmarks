import React from 'react';
import { Link } from 'react-router-dom';
import Spacer from './Spacer';
import NavMenu from './NavMenu';

const NavTab = ({ match, state, setCurrentFolder, toggleConfigModal }) => {

  if(typeof state !== 'undefined' && state.tree !== null) {
    let resultHtml = [];

    const drawNavTab = (subTree, depth) => {
      if(state.openFolders.indexOf(subTree.parentId) !== -1 ||
      subTree.id === '0') {
        if(subTree.dateGroupModified) {
          resultHtml.push(
            <div
              className='nav-tab-item-container'
            >
              <Spacer width={depth} />
              <Link
                to={`/${subTree.id}/${match.params.displayMode}`}
                className='nav-tab-item'
                onClick={() => setCurrentFolder(subTree.id)}
              >
                {subTree.title}
              </Link>
              <div className='nav-tab-item-tail'>
                {subTree.children.length}
              </div>
              <div
                className='nav-tab-item-config'
                id={`nav-${subTree.id}`}
                onClick={e => toggleConfigModal(e.target.id)}
              >
                (O)
              </div>
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

    console.log('nav tab result is :', resultHtml);
    return (
      <div className='nav-tab'>
        <NavMenu />
        {resultHtml}
      </div>
    );
  } else {
    return <div>nav</div>;
  }

};

export default NavTab;

import React from 'react';
import Icons from '../Icons';
import findInTree from '../../utils/findInTree';

const ShortcutsList = ({
  match,
  state,
  newShortcuts,
  setNewShortcuts,
  toggleConfigModal,
  setCurrentFolder
}) => {
  let html = [];
  const redirect = (id) => {
    toggleConfigModal('close');
    setCurrentFolder(id);
  };

  const resetShortcut = (number) => {
    let tempShortcuts = {...newShortcuts};
    tempShortcuts[number] = '';
    setNewShortcuts(tempShortcuts);
  };

  const makeList = shortcutNum => {
    const getShortcutData = (shortcutNum) => {
      let data = findInTree(state.tree, shortcutNum);
      if(data === undefined) {
        return ({
          title: 'empty shortcut',
          url: '',
        });
      }
      if(!data.url) {
        data.url = `index.html#/${data.id}/${match.params.displayMode}`;
      }

      return ({
        title: data.title,
        url: data.url,
      });
    };

    let shortcutData = getShortcutData(newShortcuts[shortcutNum]);
    html.push(
      <div className='modal-shortcut-list'>
        <div className='modal-shortcut-list-number'>
          #{shortcutNum}
        </div>
        <div className='modal-shortcut-list-item'>
          { shortcutData.url === '' ?
            <div className='modal-shortcut-list-title'>
              {shortcutData.title}
            </div>
            :
            <a
              className='modal-shortcut-list-title'
              onClick={() => redirect(newShortcuts[shortcutNum])}
              href={shortcutData.url}
            >
              {shortcutData.title}
            </a>
          }
          <div
            className='modal-shortcut-list-reset-button'
            onClick={() => resetShortcut(shortcutNum)}
          >
            <i className={Icons.shortcutListModal.resetButton} />
          </div>
        </div>
      </div>
    );
  };

  for(let i = 1; i < 10; i++) {
    makeList(i);
  }
  makeList(0);

  return (
    <div
      className='modal-shortcut-list-container'
    >
      {html}
    </div>
  );
};

export default ShortcutsList;

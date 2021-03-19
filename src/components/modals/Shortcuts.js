import React from 'react';
import Strings from '../Strings';

const Shortcuts = ({ id, newShortcuts, setNewShortcuts }) => {
  let html = [];
  const setShortcut = (num) => {
    let temp = {...newShortcuts};

    if(newShortcuts[num] === id) {
      temp[num] = '';
    } else {
      temp[num] = id;
    }
    setNewShortcuts(temp);
  }

  const setShortcutToHtml = (num) => {
    let shortcutClassName = 'modal-shortcut-off';
    
    if(newShortcuts[num] === id) {
      shortcutClassName = 'modal-shortcut-on';
    }
    html.push(
      <div
        className={shortcutClassName}
        onClick={() => setShortcut(num)}
      >
        #{num}
      </div>
    );
  };

  for(let i = 1; i < 10; i++) {
    setShortcutToHtml(i);
  }
  setShortcutToHtml(0);

  return (
    <div className='modal-shortcuts-container'>
      <div className='modal-shortcuts-title'>
        {Strings.configModal.shortcutsTitle}
      </div>
      <div className='modal-shortcuts'>
        {html}
      </div>
    </div>
  );
};

export default Shortcuts;

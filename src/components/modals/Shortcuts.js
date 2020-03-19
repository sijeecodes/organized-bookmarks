import React from 'react';

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

  for(let i = 0; i < 10; i++) {
    let shortcutClassName = 'modal-shortcut-off';
    if(newShortcuts[i] === id) {
      shortcutClassName = 'modal-shortcut-on';
    }
    html.push(
      <div
        className={shortcutClassName}
        onClick={() => setShortcut(i)}
      >
        #{i}
      </div>
    );
  }

  return (
    <div className='modal-shortcuts-container'>
      <div className='modal-shortcuts-title'>
        Shortcuts
      </div>
      <div className='modal-shortcuts'>
        {html}
      </div>
    </div>
  );
};

export default Shortcuts;

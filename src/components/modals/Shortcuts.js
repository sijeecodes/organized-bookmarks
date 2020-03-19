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
    let shortcutClassName = 'shortcut-off';
    if(newShortcuts[i] === id) {
      shortcutClassName = 'shortcut-on';
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
    <div className='modal-shortcut-container'>
      {html}
    </div>
  );
};

export default Shortcuts;

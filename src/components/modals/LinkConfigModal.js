import React, { useState } from 'react';

const LinkConfigModal = ({
  state,
  targetNode,
  updateTree,
  toggleConfigModal,
  removeById,
  setTags,
  setShortcuts
}) => {
  let tagData = state.tags[targetNode.id] ? state.tags[targetNode.id] : [];
  const [title, setTitle] = useState(targetNode.title);
  const [url, setUrl] = useState(targetNode.url);

  const [shortcut1, setShortcut1] = useState(state.shortcuts[1] === targetNode.url ? 'shortcut-button-on' : 'shortcut-button');
  const [shortcut2, setShortcut2] = useState(state.shortcuts[2] === targetNode.url ? 'shortcut-button-on' : 'shortcut-button');
  const [shortcut3, setShortcut3] = useState(state.shortcuts[3] === targetNode.url ? 'shortcut-button-on' : 'shortcut-button');

  const [idTags, setIdTags] = useState(tagData);
  const [red, setRed] = useState(tagData.indexOf('red')+1 ? 'mod-tag-onoff-button-on' : 'mod-tag-onoff-button');
  const [orange, setOrange] = useState(tagData.indexOf('orange')+1 ? 'mod-tag-onoff-button-on' : 'mod-tag-onoff-button');
  const [yellow, setYellow] = useState(tagData.indexOf('yellow')+1 ? 'mod-tag-onoff-button-on' : 'mod-tag-onoff-button');
  const [green, setGreen] = useState(tagData.indexOf('green')+1 ? 'mod-tag-onoff-button-on' : 'mod-tag-onoff-button');
  const [blue, setBlue] = useState(tagData.indexOf('blue')+1 ? 'mod-tag-onoff-button-on' : 'mod-tag-onoff-button');
  const [purple, setPurple] = useState(tagData.indexOf('purple')+1 ? 'mod-tag-onoff-button-on' : 'mod-tag-onoff-button');
  const [grey, setGrey] = useState(tagData.indexOf('grey')+1 ? 'mod-tag-onoff-button-on' : 'mod-tag-onoff-button');

  const updateChanges = (event) => {
    event.preventDefault();
    updateTree({
      id: targetNode.id,
      title,
      url
    });
    toggleConfigModal('close');
    setTags({id: targetNode.id, tags: idTags});

    let newShortcuts = state.shortcuts;
    if(shortcut1 === 'shortcut-button-on') {
      newShortcuts[1] = targetNode.url;
    } else if(shortcut2 === 'shortcut-button-on') {
      newShortcuts[2] = targetNode.url;
    } else if(shortcut3 === 'shortcut-button-on') {
      newShortcuts[3] = targetNode.url;
    }
    setShortcuts(newShortcuts);
  }

  const setShortcut = (shortcutNum) => {
    switch(shortcutNum) {
      case '1': {
        if(shortcut1 === 'shortcut-button') {
          setShortcut1('shortcut-button-on');
          break;
        } else {
          setShortcut1('shortcut-button');
          break;
        }
      }
      case '2': {
        if(shortcut2 === 'shortcut-button') {
          setShortcut2('shortcut-button-on');
          break;
        } else {
          setShortcut2('shortcut-button');
          break;
        }
      }
      default: {
        if(shortcut3 === 'shortcut-button') {
          setShortcut3('shortcut-button-on');
          break;
        } else {
          setShortcut3('shortcut-button');
          break;
        }
      }
    }
  }

  const tryRemoveById = () => {
    toggleConfigModal('close')
    removeById(targetNode.id);
  }

  const onPress = (tag) => {
    if(idTags.indexOf(tag) === -1) {
      let temp = idTags;
      temp.push(tag);
      setIdTags(temp);
    } else {
      let temp = idTags;
      temp.splice(idTags.indexOf(tag), 1);
      setIdTags(temp);
    }

    switch(tag) {
      case 'red': {
        if(red === 'tag-onoff-button') {
          setRed('tag-onoff-button-on');
          break;
        } else {
          setRed('tag-onoff-button');
          break;
        }
      }
      case 'orange': {
        if(orange === 'tag-onoff-button') {
          setOrange('tag-onoff-button-on');
          break;
        } else {
          setOrange('tag-onoff-button');
          break;
        }
      }
      case 'yellow': {
        if(yellow === 'tag-onoff-button') {
          setYellow('tag-onoff-button-on');
          break;
        } else {
          setYellow('tag-onoff-button');
          break;
        }
      }
      case 'green': {
        if(green === 'tag-onoff-button') {
          setGreen('tag-onoff-button-on');
          break;
        } else {
          setGreen('tag-onoff-button');
          break;
        }
      }
      case 'blue': {
        if(blue === 'tag-onoff-button') {
          setBlue('tag-onoff-button-on');
          break;
        } else {
          setBlue('tag-onoff-button');
          break;
        }
      }
      case 'purple': {
        if(purple === 'tag-onoff-button') {
          setPurple('tag-onoff-button-on');
          break;
        } else {
          setPurple('tag-onoff-button');
          break;
        }
      }
      default: {
        if(grey === 'tag-onoff-button') {
          setGrey('tag-onoff-button-on');
          break;
        } else {
          setGrey('tag-onoff-button');
          break;
        }
      }
    }
  };


  return (
    <>
      <div
        className='modal-background'
        onClick={() => toggleConfigModal('close')}
      />
      <div
        className='modal-box'
        onClick={e => e.stopPropagation()}
      >
        <div className='modal-box-close-button'
          onClick={() => toggleConfigModal('close')}>
          close
        </div>
        <div className='modal-divider' />
        <form onSubmit={updateChanges}>
          <div>
            <label>
              Title:
              <input
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Url:
              <input
                type='text'
                value={url}
                onChange={e=> setUrl(e.target.value)}
              />
            </label>
          </div>
          <div className='modal-tags-container'>
            <div
              className={red}
              onClick={() => onPress('red')}
            >
              Red
            </div>
            <div
              className={orange}
              onClick={() => onPress('orange')}
            >
              Orange
            </div>
            <div
              className={yellow}
              onClick={() => onPress('yellow')}
            >
              Yellow
            </div>
            <div
              className={green}
              onClick={() => onPress('green')}
            >
              Green
            </div>
            <div
              className={blue}
              onClick={() => onPress('blue')}
            >
              Blue
            </div>
            <div
              className={purple}
              onClick={() => onPress('purple')}
            >
              Purple
            </div>
            <div
              className={grey}
              onClick={() => onPress('grey')}
            >
              Grey
            </div>
          </div>
          <div className='modal-shortcut-container'>
            <div
              className={shortcut1}
              onClick={() => setShortcut('1', )}
            >
              Set as shortcut 1
            </div>
            <div
              className={shortcut2}
              onClick={() => setShortcut('2')}
            >
              Set as shortcut 2
            </div>
            <div
              className={shortcut3}
              onClick={() => setShortcut('3', )}
            >
              Set as shortcut 3
            </div>
          </div>
          <div className='modal-buttons-container'>
            <button
              className='modal-delete-button'
              onClick={tryRemoveById}
            >
              Delete Link
            </button>
            <input type='submit' value='Submit' />
            <button
              onClick={() => toggleConfigModal('close')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LinkConfigModal;

// <>
//   <div
//     className='modal-background'
//     onClick={() => toggleConfigModal('close')}
//   />
//   <div
//     className='modal-box'
//     onClick={e => e.stopPropagation()}
//   >
//     <div onClick={() => toggleConfigModal('close')}>
//       close
//     </div>
//     <form onSubmit={updateChanges}>
//       <label>
//         Title:
//         <input
//           type='text'
//           value={title}
//           onChange={e=> setTitle(e.target.value)}
//         />
//       </label>
//       <label>
//         Url:
//         <input
//           type='text'
//           value={url}
//           onChange={e=> setUrl(e.target.value)}
//         />
//       </label>
//       <div>
//         <div
//           className={red}
//           onClick={() => onPress('red')}
//         >
//           Red
//         </div>
//         <div
//           className={orange}
//           onClick={() => onPress('orange')}
//         >
//           Orange
//         </div>
//         <div
//           className={yellow}
//           onClick={() => onPress('yellow')}
//         >
//           Yellow
//         </div>
//         <div
//           className={green}
//           onClick={() => onPress('green')}
//         >
//           Green
//         </div>
//         <div
//           className={blue}
//           onClick={() => onPress('blue')}
//         >
//           Blue
//         </div>
//         <div
//           className={purple}
//           onClick={() => onPress('purple')}
//         >
//           Purple
//         </div>
//         <div
//           className={grey}
//           onClick={() => onPress('grey')}
//         >
//           Grey
//         </div>
//         <div
//           className={shortcut1}
//           onClick={() => setShortcut('1', )}
//         >
//           Set as shortcut #1
//         </div>
//         <div
//           className={shortcut2}
//           onClick={() => setShortcut('2')}
//         >
//           Set as shortcut #2
//         </div>
//         <div
//           className={shortcut3}
//           onClick={() => setShortcut('3', )}
//         >
//           Set as shortcut #3
//         </div>
//       </div>
//       <input type='submit' value='Submit' />
//     </form>
//     <button
//       onClick={() => toggleConfigModal('close')}
//     >
//       Cancel
//     </button>
//     <button
//       onClick={tryRemoveById}
//     >
//       Delete Link
//     </button>
//   </div>
// </>

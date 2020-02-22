import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FolderConfigModal = ({
  match,
  state,
  targetNode,
  updateTree,
  toggleConfigModal,
  removeById,
  setCurrentFolder,
  setTags,
  setShortcuts
}) => {
  let tagData = state.tags[targetNode.id] ? state.tags[targetNode.id] : [];
  const [title, setTitle] = useState(targetNode.title);

  const [shortcut1, setShortcut1] = useState(state.shortcuts[1] === `#/${targetNode.id}/` ? 'shortcut-button-on' : 'shortcut-button');
  const [shortcut2, setShortcut2] = useState(state.shortcuts[2] === `#/${targetNode.id}/` ? 'shortcut-button-on' : 'shortcut-button');
  const [shortcut3, setShortcut3] = useState(state.shortcuts[3] === `#/${targetNode.id}/` ? 'shortcut-button-on' : 'shortcut-button');

  const [idTags, setIdTags] = useState(tagData);
  const [red, setRed] = useState(tagData.indexOf('red')+1 ? 'modal-tag-onoff-button-on' : 'modal-tag-onoff-button');
  const [orange, setOrange] = useState(tagData.indexOf('orange')+1 ? 'modal-tag-onoff-button-on' : 'modal-tag-onoff-button');
  const [yellow, setYellow] = useState(tagData.indexOf('yellow')+1 ? 'modal-tag-onoff-button-on' : 'modal-tag-onoff-button');
  const [green, setGreen] = useState(tagData.indexOf('green')+1 ? 'modal-tag-onoff-button-on' : 'modal-tag-onoff-button');
  const [blue, setBlue] = useState(tagData.indexOf('blue')+1 ? 'modal-tag-onoff-button-on' : 'modal-tag-onoff-button');
  const [purple, setPurple] = useState(tagData.indexOf('purple')+1 ? 'modal-tag-onoff-button-on' : 'modal-tag-onoff-button');
  const [grey, setGrey] = useState(tagData.indexOf('grey')+1 ? 'modal-tag-onoff-button-on' : 'modal-tag-onoff-button');

  const updateChanges = (event) => {
    event.preventDefault();
    updateTree({
      id: targetNode.id,
      title
    });
    toggleConfigModal('close');
    setTags({id: targetNode.id, tags: idTags});

    let newShortcuts = state.shortcuts;
    if(shortcut1 === 'shortcut-button-on') {
      newShortcuts[1] = `#/${targetNode.id}/`;
    } else if(shortcut2 === 'shortcut-button-on') {
      newShortcuts[2] = `#/${targetNode.id}/`;
    } else if(shortcut3 === 'shortcut-button-on') {
      newShortcuts[3] = `#/${targetNode.id}/`;
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
    if(targetNode.children.length > 0) {
      alert('Cannot delete folder with contents.')
      setCurrentFolder(targetNode.id);
    } else {
      if(targetNode.parentId) {
        setCurrentFolder(targetNode.parentId);
      } else {
        setCurrentFolder(1);
      }
      removeById(targetNode.id);
    }
  }

  const onPress = (tag) => {
    let temp = idTags;

    if(idTags.indexOf(tag) === -1) {
      temp.push(tag);
    } else {
      temp.splice(idTags.indexOf(tag), 1);
    }
    setIdTags(temp);

    switch(tag) {
      case 'red': {
        if(red === 'modal-tag-onoff-button') {
          setRed('modal-tag-onoff-button-on');
          break;
        } else {
          setRed('modal-tag-onoff-button');
          break;
        }
      }
      case 'orange': {
        if(orange === 'modal-tag-onoff-button') {
          setOrange('modal-tag-onoff-button-on');
          break;
        } else {
          setOrange('modal-tag-onoff-button');
          break;
        }
      }
      case 'yellow': {
        if(yellow === 'modal-tag-onoff-button') {
          setYellow('modal-tag-onoff-button-on');
          break;
        } else {
          setYellow('modal-tag-onoff-button');
          break;
        }
      }
      case 'green': {
        if(green === 'modal-tag-onoff-button') {
          setGreen('modal-tag-onoff-button-on');
          break;
        } else {
          setGreen('modal-tag-onoff-button');
          break;
        }
      }
      case 'blue': {
        if(blue === 'modal-tag-onoff-button') {
          setBlue('modal-tag-onoff-button-on');
          break;
        } else {
          setBlue('modal-tag-onoff-button');
          break;
        }
      }
      case 'purple': {
        if(purple === 'modal-tag-onoff-button') {
          setPurple('modal-tag-onoff-button-on');
          break;
        } else {
          setPurple('modal-tag-onoff-button');
          break;
        }
      }
      default: {
        if(grey === 'modal-tag-onoff-button') {
          setGrey('modal-tag-onoff-button-on');
          break;
        } else {
          setGrey('modal-tag-onoff-button');
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
        <form
          className='modal-form'
          onSubmit={updateChanges}
        >
          <label>
            Title:
            <input
              type='text'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>
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
              <Link
                to={`/${targetNode.parentId}/${match.params.displayMode}`}
              >
              Delete Folder
              </Link>
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

export default FolderConfigModal;

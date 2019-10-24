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
  setTags
}) => {
  let tagData = state.tags[targetNode.id] ? state.tags[targetNode.id] : [];
  const [title, setTitle] = useState(targetNode.title);

  const [idTags, setIdTags] = useState(tagData);
  const [red, setRed] = useState(tagData.indexOf('red')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [orange, setOrange] = useState(tagData.indexOf('orange')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [yellow, setYellow] = useState(tagData.indexOf('yellow')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [green, setGreen] = useState(tagData.indexOf('green')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [blue, setBlue] = useState(tagData.indexOf('blue')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [purple, setPurple] = useState(tagData.indexOf('purple')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [grey, setGrey] = useState(tagData.indexOf('grey')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');

  const updateChanges = (event) => {
    event.preventDefault();
    updateTree({
      id: targetNode.id,
      title
    });
    toggleConfigModal('close');
    setTags({id: targetNode.id, tags: idTags});
  }

  const tryRemoveById = () => {
    toggleConfigModal('close')
    if(targetNode.children.length > 0) {
      alert('Cannot delete folder with contents.')
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
    console.log('onclick', idTags);
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
        <div onClick={() => toggleConfigModal('close')}>
          close
        </div>
        <form onSubmit={updateChanges}>
          <label>
            Title:
            <input
              type='text'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>
          <div>
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
          <input type='submit' value='Submit' />
        </form>
        <button
          onClick={() => toggleConfigModal('close')}
        >
          Cancel
        </button>
        <button
          onClick={tryRemoveById}
        >
          <Link
            to={`/${targetNode.parentId}/${match.params.displayMode}`}
          >
          Delete Folder
          </Link>
        </button>
      </div>
    </>
  );
}

export default FolderConfigModal;

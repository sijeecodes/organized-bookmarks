import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FolderConfigModal = ({
  match,
  targetNode,
  updateTree,
  toggleConfigModal,
  removeById,
  setCurrentFolder
}) => {

  const [title, setTitle] = useState(targetNode.title);
  const updateChanges = (event) => {
    event.preventDefault();
    updateTree({
      id: targetNode.id,
      title
    });
    toggleConfigModal('close');
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

  return (
    <div className='modal-middle-box'>
      <div onClick={() => toggleConfigModal('close')}>
        close
      </div>
      <form onSubmit={updateChanges}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e=> setTitle(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
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
  );
}

export default FolderConfigModal;

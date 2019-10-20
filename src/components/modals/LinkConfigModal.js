import React, { useState } from 'react';

const LinkConfigModal = ({ targetNode, updateTree, toggleConfigModal }) => {
  const [title, setTitle] = useState(targetNode.title);
  const [url, setUrl] = useState(targetNode.url);

  const updateChanges = (event) => {
    event.preventDefault();
    updateTree({
      id: targetNode.id,
      title,
      url
    });
    toggleConfigModal('close');
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
        <label>
          Url:
          <input
            type="text"
            value={url}
            onChange={e=> setUrl(e.target.value)}
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
        onClick={() => toggleConfigModal('close')}
      >
        Delete Link
      </button>
    </div>
  );
}

export default LinkConfigModal;

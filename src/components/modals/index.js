import React from 'react';
import ConfigModal from './ConfigModal';
import findInTree from '../../utils/findInTree';

const Modal = ({
  match,
  state,
  updateTree,
  toggleConfigModal,
  removeById,
  setCurrentFolder,
  setTags,
  setShortcuts
}) => {
  if(typeof state !== 'undefined' && state.tree !== null && state.openModal !== null) {
    const targetNode = findInTree(state.tree, state.openModal[1]);

    return (
      <ConfigModal
        state={state}
        match={match}
        targetNode={targetNode}
        updateTree={updateTree}
        toggleConfigModal={toggleConfigModal}
        removeById={removeById}
        setCurrentFolder={setCurrentFolder}
        setTags={setTags}
        setShortcuts={setShortcuts}
      />
    );
  }
  return <div className='modal-hidden'> Hidden Modal </div>
};

export default Modal;

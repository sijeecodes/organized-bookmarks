import React from 'react';
import ConfigModal from './ConfigModal';
import ShortcutListModal from './ShortcutListModal';
import RemoveTagsModal from './RemoveTagsModal';
import findInTree from '../../utils/findInTree';

const Modal = ({
  match,
  state,
  updateTree,
  toggleConfigModal,
  removeById,
  removeTags,
  setCurrentFolder,
  setTags,
  setShortcuts
}) => {
  if(typeof state !== 'undefined' && state.tree !== null && state.openModal !== null) {

    switch(state.openModal[0]) {
      case 'settings': {
        return (
          <ShortcutListModal
            match={match}
            state={state}
            toggleConfigModal={toggleConfigModal}
            setShortcuts={setShortcuts}
            setCurrentFolder={setCurrentFolder}
          />
        );
      }
      case 'removeTags': {
        return (
          <RemoveTagsModal
            state={state}
            toggleConfigModal={toggleConfigModal}
            removeTags={removeTags}
          />
        );
      }
      default: {
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
    }
  }
  return <div className='modal-hidden'> Hidden Modal </div>
};

export default Modal;

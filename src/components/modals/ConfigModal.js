import React from 'react';
import FolderConfigModal from './FolderConfigModal';
import LinkConfigModal from './LinkConfigModal';
import findInTree from '../../utils/findInTree';

const ConfigModal = ({
  match,
  state,
  updateTree,
  toggleConfigModal,
  removeById,
  setCurrentFolder,
  setTags
}) => {

  if(typeof state !== 'undefined' && state.tree !== null) {
    if(state.openModal !== null && state.openModal[0] === 'nav') {
      const targetNode = findInTree(state.tree, state.openModal[1]);
      return (
        <FolderConfigModal
          state={state}
          match={match}
          targetNode={targetNode}
          updateTree={updateTree}
          toggleConfigModal={toggleConfigModal}
          removeById={removeById}
          setCurrentFolder={setCurrentFolder}
          setTags={setTags}
        />
      );
    }
    if(state.openModal !== null && state.openModal[0] === 'main') {
      const targetNode = findInTree(state.tree, state.openModal[1]);
      if(targetNode.url) {
        return (
          <LinkConfigModal
            state={state}
            targetNode={targetNode}
            updateTree={updateTree}
            toggleConfigModal={toggleConfigModal}
            removeById={removeById}
            setTags={setTags}
          />
        );
      } else {
        return (
          <FolderConfigModal
            state={state}
            match={match}
            targetNode={targetNode}
            updateTree={updateTree}
            toggleConfigModal={toggleConfigModal}
            removeById={removeById}
            setCurrentFolder={setCurrentFolder}
            setTags={setTags}
          />
        );
      }
    }
  }
  return <div className='modal-hidden'> Hidden Modal </div>
};

export default ConfigModal;

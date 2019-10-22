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
  setCurrentFolder
}) => {

  if(typeof state !== 'undefined' && state.tree !== null) {
    if(state.openModal.nav) {
      console.log('openmodal nav------ ', state.openModal.nav);
      const targetNode = findInTree(state.tree, state.openModal.nav);
      return (
        <FolderConfigModal
          match={match}
          targetNode={targetNode}
          updateTree={updateTree}
          toggleConfigModal={toggleConfigModal}
          removeById={removeById}
          setCurrentFolder={setCurrentFolder}
        />
      );
    }
    if(state.openModal.main) {
      console.log('openmodal main------ ', state.openModal.main);
      const targetNode = findInTree(state.tree, state.openModal.main);
      if(targetNode.url) {
        return (
          <LinkConfigModal
            targetNode={targetNode}
            updateTree={updateTree}
            toggleConfigModal={toggleConfigModal}
            removeById={removeById}
          />
        );
      } else {
        return (
          <FolderConfigModal
            match={match}
            targetNode={targetNode}
            updateTree={updateTree}
            toggleConfigModal={toggleConfigModal}
            removeById={removeById}
            setCurrentFolder={setCurrentFolder}
          />
        );
      }
    }
  }
  return <div className='modal-hidden'> Hidden Modal </div>
};

export default ConfigModal;

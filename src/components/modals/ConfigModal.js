import React from 'react';
import FolderConfigModal from './FolderConfigModal';
import LinkConfigModal from './LinkConfigModal';
import findInTree from '../../utils/findInTree';

const ConfigModal = ({ state, updateTree, toggleConfigModal }) => {
  if(typeof state !== 'undefined' && state.tree !== null) {
    if(state.openModal.nav) {
      console.log('openmodal nav------ ', state.openModal.nav);
      const targetNode = findInTree(state.tree, state.openModal.nav);
      return (
        <FolderConfigModal
          targetNode={targetNode}
          updateTree={updateTree}
          toggleConfigModal={toggleConfigModal}
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
          />
        );
      } else {
        return (
          <FolderConfigModal
            state={state}
            updateTree={updateTree}
            toggleConfigModal={toggleConfigModal}
          />
        );
      }
    }
  }
  return <div className='modal-hidden'> Hidden Modal </div>
};

export default ConfigModal;

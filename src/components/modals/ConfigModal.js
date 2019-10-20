import React from 'react';
import ConfigModalBack from './ConfigModalBack';
import FolderConfigModal from './FolderConfigModal';
import LinkConfigModal from './LinkConfigModal';
import findInTree from '../../utils/findInTree';

const ConfigModal = ({ state, updateTree, toggleConfigModal }) => {
  if(typeof state !== 'undefined' && state.tree !== null) {
    if(state.openModal.nav) {
      console.log('openmodal nav------ ', state.openModal.nav);
      const targetNode = findInTree(state.tree, state.openModal.nav);
      return (
        <ConfigModalBack toggleConfigModal={toggleConfigModal}>
          <FolderConfigModal
            targetNode={targetNode}
            updateTree={updateTree}
            toggleConfigModal={toggleConfigModal}
          />
        </ConfigModalBack>
      );
    }
    if(state.openModal.main) {
      console.log('openmodal main------ ', state.openModal.main);
      const targetNode = findInTree(state.tree, state.openModal.main);
      if(targetNode.url) {
        return (
          <ConfigModalBack toggleConfigModal={toggleConfigModal}>
            <LinkConfigModal
              targetNode={targetNode}
              updateTree={updateTree}
              toggleConfigModal={toggleConfigModal}
            />
          </ConfigModalBack>
        );
      } else {
        return (
          <ConfigModalBack toggleConfigModal={toggleConfigModal}>
            <FolderConfigModal
              state={state}
              updateTree={updateTree}
              toggleConfigModal={toggleConfigModal}
            />
          </ConfigModalBack>
        );
      }
    }
  }
  return <div className='modal-hidden'> Hidden Modal </div>
};

export default ConfigModal;

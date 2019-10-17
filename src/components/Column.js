import React from 'react';

const Column = ({ mainColumn, setMainColumn }) => {
  return (
    <div className='column'>
      <div
        className='column-reduce-button'
        onClick={() => setMainColumn(mainColumn - 1)} // columnReduce()}
      >
      -
      </div>
      <div className='column-title'>
      Column
      </div>
      <div
        className='column-add-button'
        onClick={() => setMainColumn(mainColumn + 1)} // columnAdd()}
      >
      +
      </div>
    </div>
  );
};

export default Column;

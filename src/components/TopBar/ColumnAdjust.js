import React from 'react';

const ColumnAdjust = ({ mainColumn, setMainColumn }) => {

  let resultHtml = [];
  if(mainColumn > 1) {
    resultHtml.push(
      <div
        className='column-button'
        onClick={() => setMainColumn(mainColumn - 1)}
      >
        -
      </div>
    );
  } else {
    resultHtml.push(
      <div
        className='column-button-grey'
      >
        -
      </div>
    );
  }

  resultHtml.push(
    <div className='column-title'>
      Column
    </div>
  );

  if(mainColumn > 6) {
    resultHtml.push(
      <div
        className='column-button-grey'
      >
      +
      </div>
    );
  } else {
    resultHtml.push(
      <div
        className='column-button'
        onClick={() => setMainColumn(mainColumn + 1)}
      >
      +
      </div>
    );
  }

  return (
    <div className='column'>
      {resultHtml}
    </div>
  );
};

export default ColumnAdjust;

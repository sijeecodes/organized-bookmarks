import React from 'react';

const ColumnAdjust = ({ mainColumn, setMainColumn }) => {

  let resultHtml = [];
  if(mainColumn > 1) {
    resultHtml.push(
      <div
        className='column-button-shell-minus'
        onClick={() => setMainColumn(mainColumn - 1)}
      >
        <div className='column-button'>
          <i class='minus icon' fitted='true' />
        </div>
      </div>
    );
  } else {
    resultHtml.push(
      <div
        className='column-button-shell-grey-minus'
      >
        <div className='column-button'>
          <i class='minus icon' fitted='true' />
        </div>
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
        className='column-button-shell-grey'
      >
        <div className='column-button'>
          <i class='plus icon' fitted='true' />
        </div>
      </div>
    );
  } else {
    resultHtml.push(
      <div
        className='column-button-shell'
        onClick={() => setMainColumn(mainColumn + 1)}
      >
        <div className='column-button'>
          <i class='plus icon' fitted='true' />
        </div>
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

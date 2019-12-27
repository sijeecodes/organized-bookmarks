import React from 'react';

const ColumnAdjust = ({ mainColumn, setMainColumn }) => {

  let resultHtml = [];

  if(mainColumn > 1) {
    resultHtml.push(
      <div
        className='column-option-left'
        onClick={() => setMainColumn(mainColumn - 1)}
      >
        <i class='minus square outline icon' fitted='true' />
      </div>
    );
  } else {
    resultHtml.push(
      <div className='column-option-left-grey'>
        <i class='minus square outline icon' fitted='true' />
      </div>
    );
  }

  resultHtml.push(
    <div className='column-content'>
      {mainColumn}
    </div>
  );

  if(mainColumn < 6) {
    resultHtml.push(
      <div
        className='column-option-right'
        onClick={() => setMainColumn(mainColumn + 1)}
      >
        <i class='plus square outline icon' fitted='true' />
      </div>
    );
  } else {
    resultHtml.push(
      <div className='column-option-right-grey'>
        <i class='plus square outline icon' fitted='true' />
      </div>
    );
  }

  return (
    <div className='column-container'>
      <div className='column'>
        <i class='columns icon' fitted='true' />
        <div className='top-bar-dropdown-aligner'>
          <div className='column-dropdown'>
            <div className='column-title'>
              Columns
            </div>
            {resultHtml}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnAdjust;

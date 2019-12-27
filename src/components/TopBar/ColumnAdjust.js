import React from 'react';

const ColumnAdjust = ({ mainColumn, setMainColumn }) => {

  let resultHtml = [];

  if(mainColumn > 1) {
    resultHtml.push(
      <div
        className='column-option-left'
        onClick={() => setMainColumn(mainColumn - 1)}
      >
        <i className='minus square outline icon' />
      </div>
    );
  } else {
    resultHtml.push(
      <div className='column-option-left-grey'>
        <i className='minus square outline icon' />
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
        <i className='plus square outline icon' />
      </div>
    );
  } else {
    resultHtml.push(
      <div className='column-option-right-grey'>
        <i className='plus square outline icon' />
      </div>
    );
  }

  return (
    <div className='column-container'>
      <div className='column'>
        <i className='columns icon' />
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

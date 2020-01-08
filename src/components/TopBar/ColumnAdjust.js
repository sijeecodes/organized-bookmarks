import React from 'react';
import Strings from '../Strings';
import Icons from '../Icons';

const ColumnAdjust = ({ mainColumn, setMainColumn }) => {

  let resultHtml = [];

  if(mainColumn > 1) {
    resultHtml.push(
      <div
        className='column-option-left'
        onClick={() => setMainColumn(mainColumn - 1)}
      >
        <i className={Icons.columnAdjust.minus} />
      </div>
    );
  } else {
    resultHtml.push(
      <div className='column-option-left-grey'>
        <i className={Icons.columnAdjust.minus} />
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
        <i className={Icons.columnAdjust.minus} />
      </div>
    );
  } else {
    resultHtml.push(
      <div className='column-option-right-grey'>
        <i className={Icons.columnAdjust.minus} />
      </div>
    );
  }

  return (
    <div className='column-container'>
      <div className='column'>
        <i className={Icons.columnAdjust.column} />
        <div className='top-bar-dropdown-aligner'>
          <div className='column-dropdown'>
            <div className='column-option'>
              <div className='column-title'>
                {Strings.columnAdjust.title}
              </div>
            </div>
            <div className='column-option'>
              {resultHtml}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnAdjust;

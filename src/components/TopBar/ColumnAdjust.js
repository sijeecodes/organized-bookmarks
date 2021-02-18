import React from 'react';
import Strings from '../Strings';
import Icons from '../Icons';

const ColumnAdjust = ({ mainColumn, setMainColumn }) => {
  let minusColumnButton = 'column-option';
  let plusColumnButton = 'column-option';
  const trySetMainColumn = (adjustColumn) => {
    if(adjustColumn === 1 && mainColumn < 6) setMainColumn(mainColumn + adjustColumn);
    if(adjustColumn === -1 && mainColumn > 1) setMainColumn(mainColumn + adjustColumn);
  };
  if(mainColumn < 2) minusColumnButton = 'column-option-grey';
  if(mainColumn > 5) plusColumnButton = 'column-option-grey';

  return (
    <div className='column-container'>
      <div
        className={minusColumnButton}
        onClick={() => trySetMainColumn(-1)}
      >
        <div className='column-option-square' />
        <div className='column-option-tooltip'>
          {Strings.columnAdjust.preString + (mainColumn -1) + Strings.columnAdjust.afterString}
        </div>
        <div className='column-option-line' />
        <div className='column-option-icon-addon'>
          <i className={Icons.columnAdjust.minus} />
        </div>
      </div>
      <div
        className={plusColumnButton}
        onClick={() => trySetMainColumn(1)}
      >
        <div className='column-option-square' />
        <div className='column-option-tooltip'>
          {Strings.columnAdjust.preString + (mainColumn +1) + Strings.columnAdjust.afterString}
        </div>
        <div className='column-option-line' />
        <div className='column-option-icon-addon'>
          <i className={Icons.columnAdjust.plus} />
        </div>
      </div>
    </div>
  );
};

export default ColumnAdjust;

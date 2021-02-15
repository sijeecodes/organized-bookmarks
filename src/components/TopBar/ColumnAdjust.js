import React from 'react';
// import Strings from '../Strings';
import Icons from '../Icons';

const ColumnAdjust = ({ mainColumn, setMainColumn }) => {
  let minusColumnButton = 'column-option-minus';
  let plusColumnButton = 'column-option-plus';
  const trySetMainColumn = (adjustColumn) => {
    if(adjustColumn === 1 && mainColumn < 6) setMainColumn(mainColumn + adjustColumn);
    if(adjustColumn === -1 && mainColumn > 1) setMainColumn(mainColumn + adjustColumn);
  };

  if(mainColumn < 2) minusColumnButton = 'column-option-minus-grey';
  if(mainColumn > 5) plusColumnButton = 'column-option-plus-grey';

  return (
    <div className='column-container'>
      <div className='column-option'>
        <div
          className={minusColumnButton}
          onClick={() => trySetMainColumn(-1)}
        >
          <i className={Icons.columnAdjust.minus} />
        </div>
      </div>
      <div className='column-option'>
        <div
          className={plusColumnButton}
          onClick={() => trySetMainColumn(1)}
        >
          <i className={Icons.columnAdjust.plus} />
        </div>
      </div>
    </div>
  );
};

export default ColumnAdjust;

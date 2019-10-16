import React from 'react';

const Spacer = ({ width }) => {
  let result = [];
  for(let i = 1; i < width; i++) {
    result.push(<div className='nav-tab-item-spacer'></div>);
  }
  return <>{result}</>;
};

export default Spacer;

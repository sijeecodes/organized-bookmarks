import React from 'react';

const Spacer = ({ width }) => {
  let result = [];
  for(let i = 1; i < width; i++) {
    result.push(<div className='item-spacer'></div>);
  }
  return <>{result}</>;
};

export default Spacer;

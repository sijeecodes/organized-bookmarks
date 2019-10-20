import React from 'react';

const Zoom = () => {
  return (
    <div className='zoom'>
      <div
        className='zoom-out-button'
        onClick={() => console.log('out')} // zoomOut()}
      >
      -
      </div>
      <div className='zoom-title'>
      Zoom
      </div>
      <div
        className='zoom-in-button'
        onClick={() => console.log('in')} // zoomIn()}
      >
      +
      </div>
    </div>
  );
};

export default Zoom;

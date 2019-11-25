import React from 'react';

const Zoom = () => {
  return (
    <div className='zoom'>
      <div
        className='zoom-out-button'
        onClick={() => console.log('zoom out')} // zoomOut()}
      >
      -
      </div>
      <div className='zoom-title'>
      Zoom
      </div>
      <div
        className='zoom-in-button'
        onClick={() => console.log('zoom in')} // zoomIn()}
      >
      +
      </div>
    </div>
  );
};

export default Zoom;

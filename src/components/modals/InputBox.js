import React from 'react';

const InputBox = ({ name, value, setValue }) => {
  return (
    <label className='modal-inputbox-name'>
      {name} :
      <input
        className='modal-inputbox-box'
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </label>
  );
};

export default InputBox;

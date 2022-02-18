import React from 'react';
import './Input.scss';

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className='input'>
      <label>{label}</label>
      <input ref={ref} htmlFor={input.id} {...input}></input>
    </div>
  );
});

export default Input;

import React from 'react';
import './Input.scss';

const Input = ({ label, input }) => {
  return (
    <div className='input'>
      <label>{label}</label>
      <input htmlFor={input.id} {...input}></input>
    </div>
  );
};

export default Input;

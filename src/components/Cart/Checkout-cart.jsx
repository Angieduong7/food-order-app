import React, { useReducer, useRef } from 'react';
import './Checkout-cart.scss';

// const isEmpty = (value) => value.trim() === '';
// const has5Chars = (value) => value.length() === 5;

const CheckoutCart = ({ onCancel }) => {
  //   const nameRef = useRef();
  //   const streetRef = useRef();

  //   const enteredName = nameRef.current.value;
  //   const enteredStreet = streetRef.current.value;

  //   const enteredNameIsValid = !isEmpty(enteredName);
  //   const enteredStreetIsValid = !isEmpty(enteredStreet);

  const submitHandler = (event) => {
    event.preventDefault();
  };
  //   const initialState = {
  //     name: true,
  //     street: true,
  //     postalCode: true,
  //     city: true,
  //   };

  //   const formReducer = (state, action) => {
  //     switch (action.type) {
  //       case 'EMPTY_NAME':
  //         return {
  //           ...state,
  //           name: false,
  //         };
  //       default:
  //         return state;
  //     }
  //   };
  //   const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <form className='cart-form' onSubmit={submitHandler}>
      <div className='cart-control'>
        <label htmlFor='name'>Your Name</label>
        <input id='name'></input>
        {/* {!enteredNameIsValid && <p>Please enter a valid name!</p>} */}
      </div>
      <div className='cart-control'>
        <label htmlFor='street'>Street</label>
        <input id='street'></input>
      </div>
      <div className='cart-control'>
        <label htmlFor='postal-code'>Postal Code</label>
        <input id='postal-code'></input>
      </div>
      <div className='cart-control'>
        <label htmlFor='city'>City</label>
        <input id='city'></input>
      </div>
      <div className='cart-actions'>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button className='cart-submit'>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutCart;

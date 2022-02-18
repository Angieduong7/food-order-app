import React from 'react';
import './CartItem.style.scss';

const CartItem = ({ price, name, amount, onRemove, onAdd }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{name}</h2>
        <div className='cart-summary'>
          <span className='cart-price'>{formattedPrice}</span>
          <span className='cart-amount'>x {amount}</span>
        </div>
      </div>
      <div className='cart-actions'>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

import React, { useContext } from 'react';
import Modal from '../IU/Modal';
import './Cart.style.scss';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className='cart-items'>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={onHideCart}>
          Close
        </button>
        {hasItems && <button className='button'>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

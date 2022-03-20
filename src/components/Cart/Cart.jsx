import React, { useContext } from 'react';
import Modal from '../IU/Modal';
import './Cart.style.scss';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import CheckoutCart from './Checkout-cart';
import { useState } from 'react';

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

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

  const modal = (
    <div className='actions'>
      <button className='button--alt' onClick={onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className='button' onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <CheckoutCart onCancel={onHideCart} />}
      {!isCheckout && modal}
    </Modal>
  );
};

export default Cart;

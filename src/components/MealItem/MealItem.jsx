import React, { useContext } from 'react';
import MealItemForm from './MealItem-form';
import CartContext from '../../store/cart-context';
import './MealItem.style.scss';

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <div className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default MealItem;

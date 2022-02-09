import React from 'react';
import MealItemForm from './MealItem-form';
import './MealItem.style.scss';

const MealItem = ({ id, name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <div className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </div>
  );
};

export default MealItem;

import React from 'react';
import { Fragment } from 'react';
import './Header.style.scss';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className='header'>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className='main-image'>
        <img src='./meals.jpeg' alt='A table full of delicious food' />
      </div>
    </Fragment>
  );
};

export default Header;

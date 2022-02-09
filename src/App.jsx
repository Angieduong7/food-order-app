import React from 'react';
import Header from './components/Layout/Header.component';
import { Fragment } from 'react';

import './App.scss';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;

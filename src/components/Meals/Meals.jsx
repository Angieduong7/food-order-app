import { Fragment } from 'react';
import AvailableMeals from './Available-meals';
import MealsSummary from './Meals-summary';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;

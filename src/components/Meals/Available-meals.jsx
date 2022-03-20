import React, { useState, useEffect } from 'react';
import Card from '../IU/Card';
import MealItem from '../MealItem/MealItem';
import './Available-meals.style.scss';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-order-app-3cfbb-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) {
        throw new Error('Error, try again!');
      }

      const responseData = await response.json();

      const mealsLoaded = [];

      for (const key in responseData) {
        mealsLoaded.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(mealsLoaded);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return <div className='loader'></div>;
  }

  if (error) {
    return <div className='errorMessage'>{error}</div>;
  }
  return (
    <div>
      <section className='meals'>
        <Card>
          <ul>
            {meals.map(({ id, ...otherProps }) => {
              return <MealItem id={id} key={id} {...otherProps} />;
            })}
          </ul>
        </Card>
      </section>
    </div>
  );
};

export default AvailableMeals;

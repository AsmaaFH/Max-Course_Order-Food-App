import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const respnse = await fetch(
        'https://react-http-ffae2-default-rtdb.firebaseio.com/meals.json'
      );

      if (!respnse.ok) {
        throw new Error('Something Went Wrong!');
      }

      const mealsData = await respnse.json();
      const loadedMeals = [];

      for (const id in mealsData) {
        loadedMeals.push({ id, ...mealsData[id] });
      }
      setLoadedMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section>
        <Card>Something went wrong</Card>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      {isLoading && <Card>Loading...</Card>}
      {!isLoading && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;

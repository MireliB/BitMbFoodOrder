import React from "react";
import classes from './MealsSummary.module.css';
export default function MealsSummary() {
  return (
    <section className= {classes.summary}>
      Delicious Food, Delivered To You!
      <p>
        Choose your Favorite Meal From Our Broad Selection Of Available Meals
        And Enjoy A Delicious Of Dinner At Home
      </p>
      <p>
        All Our Meals Are Cooked With High-Quality Ingredients, Just-In-Time And
        Of Course By Experienced Chefs!
      </p>
    </section>
  );
}

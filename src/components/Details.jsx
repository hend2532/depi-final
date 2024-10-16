import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams(); // الحصول على ID الوجبة من المسار
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/meals/${id}`);
        setMeal(response.data);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    fetchMealDetails();
  }, [id]);

  if (!meal) {
    return <p>Loading...</p>;
  }
  return (
    <div className="details">
      {meal.imageUrl && <img src={meal.imageUrl} alt={meal.name} />}
      <div className="detail">
        <h2>{meal.name}</h2>
        <p>Calories: {meal.calories}</p>
        <p>Meal Type: {meal.mealType}</p>
        <p>Description: {meal.desc}</p>
      </div>
    </div>
  );
};

export default Details;

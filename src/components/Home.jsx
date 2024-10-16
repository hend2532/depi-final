import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Part from "./meals";
import axios from "axios";
import "./sidebar.css";

function Home() {
  const navigate = useNavigate();

  // Handle click and navigate to filtered meals page
  const handleClick = (mealType) => {
    navigate(`/meals/${mealType}`); // Redirect to the meal type page
  };

  return (
    <div className="co">
      <div className="row" onClick={() => handleClick("Breakfast")}>
        <Part
          image="https://i.pinimg.com/originals/a1/aa/92/a1aa92ca4ecfcffa5ff7b65e1665ddfb.jpg"
          meal="breakfast"
        />
      </div>

      <div className="row" onClick={() => handleClick("Lunch")}>
        <Part
          image="https://i.pinimg.com/originals/f0/fc/af/f0fcaf20e9b921009b36a3f31bf3c362.jpg"
          meal="lunch"
        />
      </div>

      <div className="row" onClick={() => handleClick("Dinner")}>
        <Part
          image="https://thebusybaker.ca/wp-content/uploads/2018/09/one-pot-chicken-dinner-fb-ig1-1.jpg"
          meal="dinner"
        />
      </div>
    </div>
  );
}

export default Home;

import React , {useEffect, useState} from "react";
import axios from "axios" ;
import './popupStyle.css' ;


const PopUP = () =>{
  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState("");
  const [meals, setMeals] = useState([]);
  const [description, setDescription] = useState({
    mealName: "",
    calories: 0,
    description: ""
  })
  
  const fetchMeals = async () => {
    try {
      const response = await axios.get("http://localhost:5000/meals");
      setMeals(response.data);
    } catch (error) {
      console.error("Error fetching meals:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const openPopup = (meal) => {
    setShowPopup(true);
    setImage(meal.src);
    setDescription({
      mealName: meal.name ,
      calories: meal.calories,
      description: ""
    });
  }

  const closePopup = () => {
    setShowPopup(false);
    setImage("");
    setDescription({
      mealName: "",
      calories: 0,
      description: ""
    });
  };


    return(
        <>
        <div>
            {meals.map((meal) => (
              <div key={meal._id} onClick={() => openPopup(meal)}>
                <img src={meal.imageUrl} alt={meal.name} />
                <h4>{meal.name}</h4>
                <p>Calories: {meal.calories}</p>
              </div>
            ))}
        </div>
        
      {showPopup && (
        <div className="Popup-overlay" onClick={closePopup}>
          <div className="Popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closePopup}> X </span>
            <img src={image} alt={description.name} className="Popup-image" />
            <div className="Popup-description">
              <h2>{description.name}</h2> 
              <p>Calories: {description.calories}</p>
            </div>
          </div>
        </div>
      )}
        </>
    );

}

export default PopUP ;


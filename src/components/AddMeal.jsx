import { useEffect, useState } from "react";
import axios from "axios";
import './addMeal.css'

const AddMeal = () => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [meals, setMeals] = useState([]);
  console.log(meals);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("calories", calories);
    formData.append("image", image);
    formData.append("desc", desc);

    try {
      const response = await axios.post(
        "http://localhost:5000/addMeal",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Meal added successfully:", response.data);
      fetchMeals(); // Fetch meals after adding a new one
    } catch (error) {
      console.error("Error adding meal:", error.response ? error.response.data : error.message);
    }
    setName("");
    setCalories(0);
    setImage("");
    setDesc("");
  };

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

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h3>Add Meal</h3>
      <label>Name</label>
      <input
        placeholder="Name..."
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Calories</label>
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(Number(e.target.value))}
      />
      <label>Image</label>
        <label className="image" for="upload">Upload Image...</label>
         <input id="upload" type="file" onChange={(e) => setImage(e.target.files[0])} />
         <label>Description</label>
      <input
        placeholder="Description..."
        value={desc}
        type="text"
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit">Add </button>

    </form>
      <h2>All Meals</h2>
      <div className="meals">
      {meals.length === 0 && <div>no Data</div>}
      {meals.length > 0 && meals.map((meal) => (
        <div className="meal" key={meal._id}>
          <img src={meal.imageUrl} alt={meal.name} />
          <h4>{meal.name}</h4>
          <p>Calories: {meal.calories}</p>
          <p>{meal.desc}</p>
        </div>
      ))}
      </div>
      </>
  );
};

export default AddMeal;

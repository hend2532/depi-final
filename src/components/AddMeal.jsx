import { useEffect, useState } from "react";
import axios from "axios";
import "./addMeal.css";
import UpdateMeal from "./UpdateMeal";
import DeleteMeal from "./DeleteMeal";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AddMeal = () => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [meals, setMeals] = useState([]);
  const [edit, setEdit] = useState(null);
  const [deleteMeal, setDelete] = useState(null);
  const [mealType, setMealType] = useState("Breakfast");

  console.log(meals);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("calories", calories);
    formData.append("image", image);
    formData.append("desc", desc);
    formData.append("mealType", mealType);

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
      console.error(
        "Error adding meal:",
        error.response ? error.response.data : error.message
      );
    }
    setName("");
    setCalories(0);
    setImage("");
    setDesc("");
    setMealType("Breakfast");
  };

  const fetchMeals = async () => {
    try {
      const response = await axios.get("http://localhost:5000/meals");
      setMeals(response.data);
    } catch (error) {
      console.error(
        "Error fetching meals:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);
  const handleDelete = (id) => {
    if (id) {
      setMeals(meals.filter((meal) => meal._id !== id)); // تحديث القائمة بعد الحذف
    }
    setDelete(null);
  };

  // فلترة الوجبات بناءً على نوع الوجبة المختار
  const filteredMeals = meals.filter((meal) => {
    return meal.mealType === mealType;
  });
  return (
    <>
      <form  className="form"onSubmit={handleSubmit}>
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
        <label className="image" for="upload">
          {!image ? "Upload Image..." : <img src={image} alt="meal" />}
        </label>
        <input
          id="upload"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <label>Description</label>
        <input
          placeholder="Description..."
          value={desc}
          type="text"
          onChange={(e) => setDesc(e.target.value)}
        />
        <label>Meal Type</label>
        <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Linner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
        <button className="btn" type="submit">
          Add{" "}
        </button>
      </form>
      <h2>All Meals</h2>
      <div className="meals">
        {meals.length === 0 && <div>Loading...</div>}
        {meals.length > 0 &&
          meals.map((meal) => (
            <div className="meal">
              <img src={meal.imageUrl} alt={meal.name} />

              <h4>
                {meal.name}
              
              </h4>
              <p>Calories: {meal.calories}</p>
              {/* <p className="desc">{meal.desc}</p> */}
              <div className="icon">
                <p className="editMeal" onClick={() => setEdit(meal._id)}>
                  <FontAwesomeIcon icon={faPen} size="sm" color="white" />
                </p>
                <Link className="detailsMeal" to={`/meal/${meal._id}`} key={meal._id}>Details</Link>
                <p onClick={() => setDelete(meal._id)}>
                  <FontAwesomeIcon className="deleteMeal" icon={faTrash} size="sm" color="#dc3545" />
                </p>
              </div>
            </div>
          ))}
      </div>
      {edit && (
        <UpdateMeal
          mealId={edit}
          name={name}
          image={image}
          desc={desc}
          calories={calories}
          mealType={mealType}
        />
      )}
      {deleteMeal && <DeleteMeal mealId={deleteMeal} onDelete={handleDelete} />}
    </>
  );
};

export default AddMeal;

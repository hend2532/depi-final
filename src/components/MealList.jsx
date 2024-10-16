import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DeleteMeal from "./DeleteMeal";
import UpdateMeal from "./UpdateMeal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

function MealList() {
  const { mealType } = useParams(); // احصل على نوع الوجبة من ال URL
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [meals, setMeals] = useState([]);
  const [edit, setEdit] = useState(null);
  const [deleteMeal, setDelete] = useState(null);

  // استدعاء البيانات من السيرفر
  const fetchMeals = async () => {
    try {
      const response = await axios.get("http://localhost:5000/meals");
      setMeals(response.data); // تعيين البيانات
    } catch (error) {
      console.error(
        "Error fetching meals:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchMeals(); // جلب البيانات عند تحميل الصفحة
  }, []);

  // فلترة الوجبات حسب نوع الوجبة
  const filteredMeals = meals.filter((meal) => {
    return  meal.mealType === mealType;
  });
  

  // التعامل مع حذف الوجبة
  const handleDelete = (id) => {
    if (id) {
      setMeals(meals.filter((meal) => meal._id !== id)); // تحديث القائمة بعد الحذف
    }
    setDelete(null); // إعادة تعيين حالة الحذف
  };

  return (
    <div>
      <h2>{mealType} Meals</h2>
      <div className="meals">
        {meals.length === 0 && <div>Loading...</div>}
        {meals.length > 0 &&
          filteredMeals.map((meal) => (
            <div className="meal" key={meal._id}>
              <img src={meal.imageUrl} alt={meal.name} />
              <h4>
                {meal.name}
              </h4>
              <p>Calories: {meal.calories}</p>
              <div className="icon">
                <Link to="/editMeal">
                <p className="editMeal" onClick={() => setEdit(meal._id)}>
                  <FontAwesomeIcon icon={faPen} size="sm" color="white" />
                </p>
                </Link>
                <Link className="detailsMeal" to={`/meal/${meal._id}`} key={meal._id}>Details</Link>
               <Link to="/deleteMeal"> <p onClick={() => setDelete(meal._id)}>
                  <FontAwesomeIcon className="deleteMeal" icon={faTrash} size="sm" color="#dc3545" />
                </p>
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* تعديل الوجبة */}
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

      {/* حذف الوجبة */}
      {deleteMeal && <DeleteMeal mealId={deleteMeal} onDelete={handleDelete} />}
    </div>
  );
}

export default MealList;

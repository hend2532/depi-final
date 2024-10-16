import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateMealForm from "./UpdateMeal"; // استدعاء مكون التعديل
import DeleteMeal from "./DeleteMeal"; // استدعاء مكون الحذف

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [deleteMealId, setDeleteMealId] = useState(null); // لحفظ معرف الوجبة التي نريد حذفها

  // جلب الوجبات من قاعدة البيانات
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/meals");
        setMeals(response.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []);

  // وظيفة لحذف الوجبة
  const handleDelete = (id) => {
    if (id) {
      setMeals(meals.filter((meal) => meal._id !== id)); // تحديث القائمة بعد الحذف
    }
    setDeleteMealId(null); // إغلاق مكون الحذف
  };

  return (
    <div>
      <h2>Meal List</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal._id}>
            {meal.name} - {meal.calories} calories
            <button onClick={() => setSelectedMealId(meal._id)}>Edit Meal</button>
            <button onClick={() => setDeleteMealId(meal._id)}>Delete Meal</button>
          </li>
        ))}
      </ul>

      {/* إذا تم اختيار وجبة، اعرض مكون التعديل */}
      {selectedMealId && <UpdateMealForm mealId={selectedMealId} />}
      
      {/* إذا تم تحديد حذف وجبة، اعرض مكون الحذف */}
      {deleteMealId && (
        <DeleteMeal mealId={deleteMealId} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default MealList;

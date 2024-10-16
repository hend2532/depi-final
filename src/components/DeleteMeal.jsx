// DeleteMeal.js
import React from "react";
import axios from "axios";

const DeleteMeal = ({ mealId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/deleteMeal/${mealId}`);
      onDelete(mealId); // استدعاء الدالة المرسلة من الأب لتحديث الحالة
      alert("Meal deleted successfully!");
    } catch (error) {
      console.error("Error deleting meal:", error);
      alert("An error occurred while deleting the meal.");
    }
  };

  return (
    <form className="form">
      <h3>Are you sure you want to delete this meal?</h3>
      <div className="delete"></div>
      <button  onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => onDelete(null)}>Cancel</button>
    </form>
  );
};

export default DeleteMeal;

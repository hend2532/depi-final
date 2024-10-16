import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateMeal = ({ name, calories, desc, image, mealId, mealType }) => {
  // حالات لحفظ القيم
  const [meal, setMeal] = useState({
    name: name,
    calories: calories,
    desc: desc,
    image: image,
  });

  // الحصول على بيانات الوجبة عندما يتم تحميل المكون
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/meals/${mealId}`
        );
        setMeal({
          name: response.data.name,
          calories: response.data.calories,
          desc: response.data.desc,
          mealType: response.data.mealType,
          image: response.data.imageUrl,
        });
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };

    fetchMeal();
  }, [mealId]);

  // تحديث القيم عند تعديلها في النموذج
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal((prevMeal) => ({ ...prevMeal, [name]: value }));
  };

  const handleFileChange = (e) => {
    setMeal((prevMeal) => ({ ...prevMeal, image: e.target.files[0] }));
  };

  // إرسال النموذج لتحديث الوجبة
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", meal.name);
    formData.append("calories", meal.calories);
    formData.append("desc", meal.desc);
    formData.append("mealType", meal.mealType);

    // استخدام الصورة الجديدة إذا كانت موجودة
    if (meal.image) {
      formData.append("image", meal.image);
    } else {
      formData.append("image", meal.image); // استخدام الصورة القديمة إذا لم يتم اختيار جديدة
    }

    try {
      await axios.put(`http://localhost:5000/updateMeal/${mealId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Meal updated successfully!");
      // إعادة تعيين الحالة إلى القيم الأصلية بعد التحديث
      setMeal({ name: "", calories: "", desc: "", image: "", mealType: "" });
    } catch (error) {
      console.error("Error updating meal:", error);
      alert("An error occurred while updating the meal.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Update Meal</h3>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={meal.name}
        onChange={handleChange}
      />
      <label>Calories:</label>
      <input
        type="number"
        name="calories"
        value={meal.calories}
        onChange={handleChange}
      />
      {/* <label>Image (optional):</label>
      <label className="image" htmlFor="upload">
        {!meal.image ? "Upload Image..." : <img src={meal.image} width={180} height={200} alt="meal" />}
      </label>
      <input id="upload"  name="image" type="file" onChange={handleFileChange} /> */}

      <label>Description:</label>
      <input name="desc" value={meal.desc} onChange={handleChange} />
      <label>Meal Type</label>
      <select name="mealType" value={meal.mealType} onChange={handleChange}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>

      <button className="btn" type="submit">
        Update Meal
      </button>
    </form>
  );
};

export default UpdateMeal;

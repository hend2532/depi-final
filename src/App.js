import "./App.css";
import AddMeal from "./components/AddMeal.jsx";
import PopUP from "./components/PopUP.jsx";
import Details from "./components/Details.jsx";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx";
import HomeM from "./components/HomeM.jsx";
import Upper from "./components/Upperdiv.jsx";
import Sidebar from "./components/Sidebar.jsx";
import DashBoard from "./components/DashBoard.jsx";
import SignUp from "./components/SignUp.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import MealList from "./components/MealList.jsx";
import UpdateMeal from "./components/UpdateMeal.jsx";
import DeleteMeal from "./components/DeleteMeal.jsx";
import SignOut from "./components/SignOut.jsx";
import Goals from "./components/Goals.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom"; // استيراد التوجيه الصحيح

function App() {
  const [userName, setUserName] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeM />} />
        <Route path="/home" element={<> <Sidebar name={userName || "gest"}/> <Upper /> <Home/></>} />
        <Route path="/meal/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addMeal" element={<><AddMeal /></>} />
        <Route path="/dashboard" element={<><Sidebar name={userName || "Gest"}/> <DashBoard /></>} />
        <Route path="/meals/:mealType" element={<MealList />} />
        <Route path="/editMeal" element={<UpdateMeal />} />
        <Route path="/DeleteMeal" element={<DeleteMeal />} />
        <Route path="/logout" element={<><Sidebar name={userName || "Gest"}/><SignOut /></>} />
        <Route path="/goals" element={<><Sidebar name={userName || "Gest"}/><Goals /></>} />
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;

import React, { useState } from "react";
import "./home.css";
import Login from "./Login";
import SignUp from "./SignUp";

import img1 from "./logo.jpg"
import img2 from "./home1.png"
import { Link } from "react-router-dom";


const Home = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  if(show){
    return <Login></Login>
  }
  
  if(show1){
    return <SignUp></SignUp>
  }
  return (
   
    
    <div className="container1">

      <div> 
      <img src={img2} alt="error" className="wall"/>
       </div>
      <div className="all">
      <img src={img1} alt="logo"/>
      <h3 className="h3-home">Hello !</h3>
      <p>
        A balanced lifestyle combines regular exercise with a nutrient-rich
        diet,promoting physical strength ,energy and overall well-being
      </p>
      {/* <button className="login1" onClick={(e) =>{e.preventDefault () ; setShow(true)}}>Login</button>
      <button className="login11" onClick={(e) =>{e.preventDefault () ; setShow1(true)}}> SignUp</button> */}
      <Link className="link" to="/login" >login</Link>
      <Link className="link" to="/signup" >sign up</Link>
    </div>
   

    </div>
  );
};

export default Home;

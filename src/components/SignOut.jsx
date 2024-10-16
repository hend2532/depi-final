import React from "react";
// import "./home.css";
const SignOut = () => {
  return (
    <div className="out">
      <h2>Are You Sure To Delete Your Account?</h2>
      <div className="buttons">
        <button className="yes">Yes</button>
        <button className="no">No</button>
      </div>
    </div>
  );
};

export default SignOut;

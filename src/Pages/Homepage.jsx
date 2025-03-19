import React from "react";
import HomeImage from "../Images/home.jpg";

function Homepage() {
  return (
    <div>
    
      <img 
        src={HomeImage} 
        alt="Home" 
        style={{ width: "100%",  height: "auto", borderRadius: "10px" }} 
      />
    </div>
  );
}

export default Homepage;

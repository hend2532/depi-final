
import React, { Component } from "react";

import "./sidebar.css";
class Part extends Component{
    render(){
        const { image, meal,description } = this.props;
        return(
            <div className="Contt">
            <div>
            <img src={image}></img>
            </div>
            <div className="desc">
            <div>
            <h4>{meal}</h4>
          
            </div>
            
           
            </div>
            </div>
        )
        
        
    }
}
export default Part;
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFlag, faCalendar, faTrophy, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar ({name}){

        return (
            <div className="container">
                <div className="div1">
                    <p>Hello,{name || "Gest"}</p>
                </div>
                <hr className="separator" />
                <div className="div2">
                    <div className="col1">
                        <h5>HEIGHT</h5>
                        <h6>185 cm</h6>
                    </div>
                    <div className="col1">
                        <h5>WEIGHT</h5>
                        <h6>176 kg</h6>
                    </div>
                </div>
                <hr className="separator" />
                <div className="div3">
                <ul>
                    <li className="A active"> {/* Active state for Home */}
                        <FontAwesomeIcon icon={faHome} size="1x" />
                        <Link to={"/home"}>Home</Link>
                    </li>
                    <li className="A">
                        <FontAwesomeIcon icon={faFlag} size="1x" />
                        <Link to="/goals">My goals</Link>
                    </li>
                  
                    <li className="A">
                        <FontAwesomeIcon icon={faTrophy} size="1x" />
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                   
                    <li className="A">
                   
                        <FontAwesomeIcon icon={faCog} size="1x" />
                        <Link to={"/logout"}>Logout</Link>
                       
                    </li>
                    </ul>
                </div>
                
                {/* <div className="div4">
                    <p>CONGRATULATIONS!</p>
                    <p>You have unlocked the 'Expert' level.</p>
                </div> */}
            </div>
        );
    }


export default Sidebar;

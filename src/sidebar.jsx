import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faHome, faFlag, faCalendar, faTrophy, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';

import "./sidebar.css";

class Sidebar extends Component {
    render() {
        return (
            <div className="container">
                <div className="div1">
                    <p>Male, 28 years</p>
                </div>
                <hr class="separator"></hr>
                <div className="div2">
                    <div className="col1">
                        <h5>Height</h5>
                        <h6>25</h6>
                    </div>
                    <div className="col1">
                        <h5>Weight</h5>
                        <h6>25</h6>
                    </div>
                </div>
                <hr class="separator"></hr>
                <div className="div3">
                    <div className="A">
                        <span><FontAwesomeIcon icon={faHome} size="1x" color="gray" /></span>
                        <span>Home</span>
                    </div>
                    <div className="A">
                        <span><FontAwesomeIcon icon={faFlag} size="1x" color="gray" /></span>
                        <span>My goals</span>
                    </div>
                    <div className="A">
                        <span><FontAwesomeIcon icon={faCalendar} size="1x" color="gray" /></span>
                        <span>Schedule</span>
                    </div>
                    <div className="A">
                        <span><FontAwesomeIcon icon={faTrophy} size="1x" color="gray" /></span>
                        <span>Achievements</span>
                    </div>
                    <div className="A">
                        <span><FontAwesomeIcon icon={faChartBar} size="1x" color="gray" /></span>
                        <span>Statistics</span>
                    </div>
                    <div className="A">
                        <span><FontAwesomeIcon icon={faCog} size="1x" color="gray" /></span>
                        <span>Settings</span>
                    </div>
                </div>

                <div className="div4">
                  
                </div>
            </div>
        );
    }
}

export default Sidebar;

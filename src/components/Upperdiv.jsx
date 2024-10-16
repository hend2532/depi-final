import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class Upper extends Component {
    render() {
        return (
            <div className="upper">
            <div className="cont">
            <div className="c">
                <div className="row1">
                    {/* <p>
                        <FontAwesomeIcon icon={faCarrot} />
                        </p> */}
                </div>
                <div className="row1">
                    <h3>Meals</h3>
                </div>
                <div className="row1">
                    <h6>140 Calories</h6>
                </div>
                </div>
            <button>
                <Link to={"/addMeal"}>
                    add meal
                </Link>
            </button>
            </div>
        </div>
        );
    }
}

export default Upper;

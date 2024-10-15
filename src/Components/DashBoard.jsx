import React from "react";

export default function DashBoard() {
    return (
        <>
            <div className="main-dash">
                <div className="container-dash">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input-search"
                    />
                    <div className="container-dashboard-divs">
                        <div className="dashbord-divs">
                            <h4>Water</h4>
                            <p>1.5 litres</p>
                            <button className="btn">Show Details</button>
                        </div>
                        <div className="dashbord-divs">
                            <h4>Sleep</h4>
                            <p>6 hours</p>
                            <button className="btn">Show Details</button>
                        </div>
                        <div className="dashbord-divs">
                            <h4>Calories</h4>
                            <p>50%</p>
                            <button className="btn">Show Details</button>
                        </div>
                        <div className="dashbord-div-empty"></div>
                    </div>
                    <div className="container-chart-api">
                        <div className="chart-div"></div>
                        <div className="api-div">
                            <h5 className="text-center">Popular Workout</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

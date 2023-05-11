import React from "react";
import "./Future.css";

const Future = (props) => {
  return (
    <div className="future_data">
      <div className="future_container">
        <h4 style={{ color: "#4DD637" }}>{props.date}</h4>
        <div className="min_max_conatiner">
          <div className="min_container">
            <p>
              min: <span className="min_temp"> {props.min}°C</span>
            </p>
          </div>
          <div className="max_container">
            <p>
              max: <span className="max_temp"> {props.max}°C</span>
            </p>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Future;

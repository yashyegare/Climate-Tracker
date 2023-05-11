import React from "react";
import "./RiseSet.css";

const RiseSet = (props) => {
  return (
    <div className="sunrise">
      <p>{props.seticon}</p>
      <div className="sun_time">
        <p className="title">{props.SunTitle}</p>
        <p className="sunrise_time">{props.SunTime}</p>
      </div>
    </div>
  );
};

export default RiseSet;

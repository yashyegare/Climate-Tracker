import React from "react";
import "./Airtype.css";

const AirType = (props) => {
  return (
    <div className="airtype">
      <p className="title">{props.title}</p>
      <p className="title_data">{props.titleData}</p>
    </div>
  );
};

export default AirType;

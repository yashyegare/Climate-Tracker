import React from "react";
import Card from "../../UI/Card";
import "./Hours.css";

const Hours = (props) => {
  return (
    <Card className="hourly_card">
      <div className="hours">{props.time}</div>
      <img src={props.imgsrc} alt="img" />
      <div className="hours_temp">
        {props.temperature}
        <sup>o</sup>
      </div>
    </Card>
  );
};

export default Hours;

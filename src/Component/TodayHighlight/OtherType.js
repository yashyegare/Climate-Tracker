import React from "react";
import Card from "../../UI/Card";
import "./OtherType.css";

const OtherType = (props) => {
  return (
    <Card className="othertype_caontainer">
      <p className="othertype_title">{props.highlightTitle}</p>
      <div className="icon_details">
        <p>{props.icon}</p>
        <p className="icon_data">
          {props.highlightTitleData}
          <span className="parameter">{props.parameter}</span>
        </p>
      </div>
    </Card>
  );
};

export default OtherType;

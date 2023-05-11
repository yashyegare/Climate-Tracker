import React from "react";
import "./Card.css";

export const Card = (props) => {
  const cardclass = "card " + props.className;
  return <div className={cardclass}>{props.children}</div>;
};

export default Card;

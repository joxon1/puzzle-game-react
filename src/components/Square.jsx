import React from "react";
import "../styles/Square.css";

const Square = (props) => {
  return (
    <div
      className={props.value === 0 ? "empty_square" : "fill_square"}
      onClick={() => props.clickHandler(props.value)}
    >
      {props.value}
    </div>
  );
};

export default Square;

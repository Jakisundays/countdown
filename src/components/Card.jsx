import React from "react";
import "../styles/Card.css";

const Card = ({children}) => {
  return (
    <div class="card">
      {children}
    </div>
  );
};

export default Card;

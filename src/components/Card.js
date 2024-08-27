import React, { useState } from "react";

function Card({ id, image, name, price, info, onRemove }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image"></img>
      <div className="toure-info">
        <div className="toure-details">
          <h4 className="tour-price"> ₹ {price}</h4>
          <h4 className="tour-name">{name} </h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `show less` : `read more`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => onRemove(id)}>
        Not Intrested
      </button>
    </div>
  );
}

export default Card;

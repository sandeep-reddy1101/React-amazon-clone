import React from "react";
import { Link } from "react-router-dom";

const ImageActionCard = (_props) => {
  const {cardObj} = _props
  
  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="fs-3 fw-bold">{cardObj.title}</h2>
        <img
          className="w-100"
          src={cardObj.imgURL}
          alt="Hydrate all summer"
        />
        <Link to={cardObj.ctaUrl}>{cardObj.ctaText}</Link>
      </div>
    </div>
  );
};

export default ImageActionCard;

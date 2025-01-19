import React from "react";
import "./Card.css";

function Card({
  className,
  image,
  alt,
  foodName,
  firstPhoto,
  firstAlt,
  secondPhoto,
  secondAlt,
  thirdPhoto,
  thirdAlt,
  description,
}) {
  return (
    <div className={className}>
      <img src={image} alt={alt} />
      <div className="header">
        <h1 className="food">{foodName}</h1>
        <div className="images">
          <img src={firstPhoto} alt={firstAlt} />
          <img src={secondPhoto} alt={secondAlt} />
          <img src={thirdPhoto} alt={thirdAlt} />
        </div>
      </div>
      <p className="description">{description}</p>
    </div>
  );
}
export default Card;

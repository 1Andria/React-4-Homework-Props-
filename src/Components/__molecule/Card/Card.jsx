import React from "react";
import "./Card.css";
import Button from "../../__atom/Button/Button";

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
  cal,
  PFC,
  celsius,
  newPrice,
  oldPrice,
  ord,
}) {
  return (
    <div className={className}>
      <img src={image} alt={alt} />
      <div className="space">
        <div className="header">
          <h1 className="food">{foodName}</h1>
          <div className="images">
            <img src={firstPhoto} alt={firstAlt} />
            <img src={secondPhoto} alt={secondAlt} />
            <img src={thirdPhoto} alt={thirdAlt} />
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="condition">
          <p className="cond">{cal}</p>
          <p className="cond">{PFC}</p>
          <p className="cond">{celsius}</p>
        </div>
        <div className="condition">
          <div className="prices">
            <h1 className="new_price">{newPrice}</h1>
            <h4 className="old_price">{oldPrice}</h4>
          </div>
          <Button order={ord} />
        </div>
      </div>
    </div>
  );
}
export default Card;

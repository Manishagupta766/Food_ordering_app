import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      {cuisines && cuisines.length > 0 && <h5>{cuisines.join(", ")}</h5>}

      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

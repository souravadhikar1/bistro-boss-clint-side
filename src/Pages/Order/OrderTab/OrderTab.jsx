import React from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";

// TODO: add pagination on this page

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;

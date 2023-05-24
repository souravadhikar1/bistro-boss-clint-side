import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex space-x-2">
      <img
        className="w-[100px]"
        style={{ borderRadius: "0 200px 200px 200px", background: " #D9D9D9;" }}
        src={image}
        alt=""
      />
      <div>
        <h3>{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;

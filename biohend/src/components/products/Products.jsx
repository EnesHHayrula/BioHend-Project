import React from "react";

import { FaRegHeart } from "react-icons/fa";

import pr1 from "/images/product1.jpg";
import pr2 from "/images/product2.jpg";
import pr3 from "/images/product3.jpg";
import Card from "../card/Card";

export const Products = () => {
  const data = [
    {
      id: 1,
      img: pr1,
      price: 10,
      title: "Lavender oil",
    },
    {
      id: 2,
      img: pr2,
      price: 5,
      title: "Lavender water",
    },
    {
      id: 3,
      img: pr3,
      price: 10,
      title: "Worm Tea",
    },
  ];

  return (
    <>
      <div className="shop-box-inner">
        <div className="container">
          <div className="row">
            {data?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

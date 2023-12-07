import React from "react";

import Card from "../card/Card";
import Loader from "../Loader";
import { useState, useEffect } from "react";
import axios from "axios";

export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/products?populate=*"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // const data = [
  //   {
  //     id: 1,
  //     img: pr1,
  //     price: 10,
  //     title: "Lavender oil",
  //   },
  //   {
  //     id: 2,
  //     img: pr2,
  //     price: 5,
  //     title: "Lavender water",
  //   },
  //   {
  //     id: 3,
  //     img: pr3,
  //     price: 10,
  //     title: "Worm Tea",
  //   },
  //   {
  //     id: 4,
  //     img: pr4,
  //     price: 8,
  //     title: "Thyme Oil",
  //   },
  //   {
  //     id: 5,
  //     img: pr5,
  //     price: 4.99,
  //     title: "Thyme Water",
  //   },
  // ];

  return (
    <>
      <div className="shop-box-inner">
        <div className="container">
          <div className="row">
            {data.map(
              (item) => (
                <Card item={item} key={item.id} />
              )
              // <Card item={item} key={item.id} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

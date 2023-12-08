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

import React, { useState } from "react";
import Products from "../products/Products";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import pr1 from "/images/product1.jpg";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product">
      <div className="left">
        <div className="mainImage">
          <img src={pr1} />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$ 1231</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio debitis
          eos amet error voluptas ducimus perferendis consectetur iusto laborum
          sunt, aut unde, dolores quis iste quas delectus aliquid eius sequi?
        </p>
        <div className="quantity"></div>
        <button
          className="quantity-button"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
        {quantity}
        <button
          className="quantity-button"
          onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
        >
          -
        </button>
        <button className="add">
          <IoCartOutline />
          ADD TO CART
        </button>

        <div className="wishlist">
          <FaRegHeart />
          ADD TO WISHLIST
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

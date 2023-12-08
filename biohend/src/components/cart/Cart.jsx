import React, { useContext, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./Cart.css";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  return (
    <>
      <div className="shopping-cart">
        <h1>Products in your cart</h1>
        {products?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.description?.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x ${item.price}
              </div>
            </div>
            <RiDeleteBin5Line className="delete" />
          </div>
        ))}
        <div className="total">
          <span>SUBTOTAL</span>
          <span>$ {totalPrice()}</span>
        </div>
        <button>CHECKOUT</button>
        <span className="reset"> Reset Cart</span>
      </div>
    </>
  );
};

export default Cart;

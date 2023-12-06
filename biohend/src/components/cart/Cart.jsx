import React, { useContext, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./Cart.css";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "/images/product1.jpg",
      price: 10,
      title: "Lavender oil",
      description: "Good for your skin",
    },
    {
      id: 2,
      img: "/images/product2.jpg",
      price: 5,
      title: "Lavender water",
      description: "Good for your skin",
    },
  ];

  const products = useSelector((state) => state.cart.products);

  const navigate = useNavigate();
  const { cartItems, setCartItems } = useState({});

  const { productId } = useParams();

  const removeFromCartHandler = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <div className="shopping-cart">
        <h1>Products in your cart</h1>
        {data?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.description?.substring(0, 100)}</p>
              <div className="price">1 x ${item.price}</div>
            </div>
            <RiDeleteBin5Line className="delete" />
          </div>
        ))}
        <div className="total">
          <span>SUBTOTAL</span>
          <span>$12</span>
        </div>
        <button>CHECKOUT</button>
        <span className="reset"> Reset Cart</span>
      </div>
    </>
  );
};

export default Cart;

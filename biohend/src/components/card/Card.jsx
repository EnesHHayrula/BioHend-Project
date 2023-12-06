import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
const addToCartHandler = (e) => {
  let items = JSON.parse(localStorage.getItem("shoppingCart")) ?? [];

  items.push({
    id: $(e.target).parents(".product").attr("data-id"),
    qty: 1,
  });
  localStorage.setItem("shoppingCart", JSON.stringify(items));
};

const Card = ({ item }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12">
      <div className="product" data-id="2">
        <Link className="card-link" to={`/shop/${item.id}`}>
          <img src={item.img} className="product-image" />
          <div className="col-xs-12 text-center">
            <h3>{item.title}</h3>
          </div>
        </Link>
        <div className="row">
          <div className="col-xs-12 col-md-6 product-icons">
            <p className="price">$ {item.price}</p>
          </div>
          <div className="col-xs-12 col-md-6 text-right product-icons">
            <span
              className="favorites"
              // onClick={favoriteEventHandler}
              data-toggle="tooltip"
              data-placement="right"
              title="Add to Wishlist"
            >
              <FaRegHeart />
            </span>
          </div>
        </div>
        <div className="col-xs-12 text-center">
          <a className="cart" href="#" onClick={addToCartHandler}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
